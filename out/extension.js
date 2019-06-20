"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cluster_1 = require("cluster");
const vscode_1 = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(disposables) {
    console.log("Spell and Grammar checker active...");
    cluster_1.settings = readSettings();
    vscode_1.commands.registerCommand;
    {
        'Spell.suggestFix', suggestFix;
    }
    ;
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map