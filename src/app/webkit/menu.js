var gui = require('nw.gui');

window.requireNode = window.require;
window.require = undefined;

var win = gui.Window.get();

var nativeMenuBar = new gui.Menu({type: 'menubar'});
nativeMenuBar.createMacBuiltin(gui.App.manifest.name);
win.menu = nativeMenuBar;

