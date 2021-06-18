import chug from 'gulp-chug';
import gulp from 'gulp';
import del from 'del';
import yargs from 'yargs';

const { argv } = yargs
  .options({
    rootPath: {
      description: '<path> path to public assets directory',
      type: 'string',
      requiresArg: true,
      required: false,
    },
    nodeModulesPath: {
      description: '<path> path to node_modules directory',
      type: 'string',
      requiresArg: true,
      required: false,
    },
  });

const config = [
  '--rootPath',
  argv.rootPath || '../../../../../../../tests/Application/public/assets',
  '--nodeModulesPath',
  argv.nodeModulesPath || '../../../../../../../tests/Application/node_modules',
];

export const buildAdmin = function buildAdmin() {
  return gulp.src('../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/gulpfile.babel.js', { read: false, allowEmpty: true })
    .pipe(chug({ args: config, tasks: 'build' }));
};
buildAdmin.description = 'Build admin assets.';

export const watchAdmin = function watchAdmin() {
  return gulp.src('../../vendor/sylius/sylius/src/Sylius/Bundle/AdminBundle/gulpfile.babel.js', { read: false })
    .pipe(chug({ args: config, tasks: 'watch' }));
};
watchAdmin.description = 'Watch admin asset sources and rebuild on changes.';

export const buildShop = function buildShop() {
  return gulp.src('../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/gulpfile.babel.js', { read: false, allowEmpty: true  })
    .pipe(chug({ args: config, tasks: 'build' }));
};
buildShop.description = 'Build shop assets.';

export const watchShop = function watchShop() {
  return gulp.src('../../vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/gulpfile.babel.js', { read: false })
    .pipe(chug({ args: config, tasks: 'watch' }));
};
watchShop.description = 'Watch shop asset sources and rebuild on changes.';

export const buildJsAssets = function buildJsAssets() {
  return gulp.src('../../src/Resources/public/js/**/*.js')
    .pipe(gulp.dest('./public/bundles/bitbagsyliusmollieplugin/js/'));
};

export const buildCssAssets = function buildCssAssets() {
  return gulp.src('../../src/Resources/public/css/**/*.css')
    .pipe(gulp.dest('./public/bundles/bitbagsyliusmollieplugin/css/'));
};

export const cleanJsAdmin = function cleanJsAdmin() {
  return del(['./public/bundles/bitbagsyliusmollieplugin/js/Admin/*/']);
};

export const cleanCssAdmin = function cleanCssAdmin() {
  return del(['./public/bundles/bitbagsyliusmollieplugin/css/Admin/*/']);
};

export const build = gulp.parallel(buildAdmin, buildShop);
build.description = 'Build assets.';

gulp.task('admin', buildAdmin);
gulp.task('admin-watch', watchAdmin);
gulp.task('shop', buildShop);
gulp.task('shop-watch', watchShop);
gulp.task('cleanJsAdmin', cleanJsAdmin);
gulp.task('cleanCssAdmin', cleanCssAdmin);
gulp.task('buildJsAssets', gulp.series('cleanJsAdmin'), buildJsAssets);
gulp.task('buildCssAssets', gulp.series('cleanCssAdmin'), buildCssAssets);
gulp.task('watch', function () {
  gulp.watch('../../src/Resources/public/js/Admin/**/*.js', gulp.task('buildJsAssets'));
  gulp.watch('../../src/Resources/public/css/**/*.css', gulp.task('buildCssAssets'));
});

export default build;
