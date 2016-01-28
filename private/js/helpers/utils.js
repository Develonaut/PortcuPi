module.exports = {
  buildModConf: function(mod_name, data_conf, js_files, css_files, data, layout) {

    // mod_name param = string 'main-mod'
    var mod_name = (typeof(mod_name) === "undefined" || typeof(mod_name) !== "string") ? null : mod_name;
    // data_conf param = object {user_id: '123456'}
    var data_conf = (typeof(data_conf) === "undefined" || typeof(data_conf !== "object")) ? null : data_conf;
    // js_files param = array of files path strings ['/js/file_name.js']
    var js_files = (typeof(js_files) === "undefined" || js_files.constructor !== Array) ? [] : js_files;
    // css_files param = array of files path strings ['/css/file_name.css']
    var css_files = (typeof(css_files) === "undefined" || css_files.constructor !== Array) ? [] : css_files;
    // data param = object {user_count: 5}
    var data = (typeof(data) === "undefined" || typeof(data) !== "object") ? null : data;

    var mod_conf = {
      mod_name: mod_name,
      data_conf: data_conf,
      js_files: js_files,
      css_files: css_files,
      data: data
    };

    // layout param = only add this argument if you want to return the template/patrial content
    // without header and footer decoration
    if (typeof(layout) !== "undefined" && typeof(layout === "boolean")) {
      mod_conf.layout = layout;
    }

    return mod_conf;
  },
  isEmptyObject: function(obj) {
    return !Object.keys(obj).length;
  }
};