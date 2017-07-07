// @flow
class Defaults {
    rootPath: string;
    layoutsDir: string;
    componentsDir: string;
    defaultLayout: string;
    options: Object;
    backupLayout: {start: string, middle: string, end: string};
    layoutPath: string;
    customLayout: string;
    options: Object;
    constructor(options: Object = {settings: {vue: null}}) {
        if (options.settings.vue === null) {
            options.settings.vue = {};
            throw new Error('------------- Missing VUE OPTIONS! -------------');
        }
        this.rootPath      = options.settings.vue.rootPath      === undefined ? options.settings.views + '/' : options.settings.vue.rootPath + '/';
        this.layoutsDir    = options.settings.vue.layoutsDir    === undefined ? '' : this.rootPath + options.settings.vue.layoutsDir + '/';
        this.componentsDir = options.settings.vue.componentsDir === undefined ? '' : options.settings.vue.componentsDir + '/';
        this.defaultLayout = options.settings.vue.defaultLayout === undefined ? '' : options.settings.vue.layoutsDir === undefined ? this.rootPath + options.settings.vue.defaultLayout : options.settings.vue.defaultLayout;
        this.customLayout  = options.layout                     === undefined ? '' : options.settings.vue.layoutsDir === undefined ? this.rootPath + options.layout : options.layout;
        this.options       = options.settings.vue.options       === undefined ? {} : options.settings.vue.options;
        this.backupLayout  = {
            start: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"><script src="https://unpkg.com/vue/dist/vue.js"></script>',
            middle: '<body><div id="app">',
            end: '</div></body></html>'
        };
        this.layoutPath    = this.layoutsDir + (this.customLayout || this.defaultLayout) + '.vue';
        this.options       = options;
    }
}

module.exports = Defaults;
