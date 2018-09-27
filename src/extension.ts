'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "a" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('infiniteenigma.toggleWhitespace', () => {
        // The code you place here will be executed every time your command is executed
        
        let textEditor = vscode.window.activeTextEditor;
        if (!textEditor) {
            vscode.window.showInformationMessage('Open something');
            return; // No open text editor
        }
        
        let textDoc = textEditor.document;
        var curText = textDoc.getText();
        var newText : string;
        // LINK: https://regex101.com/r/3reqL5/4
        if (curText.search(/>(\r?\n\s*)</g) !== -1) {
            newText = curText.replace(/>(\r?\n\s*)</g, "$1><");
        } else {
            newText = curText.replace(/(\r?\n\s*)></g, ">$1<");
        }
        const fullRange = new vscode.Range(
            textDoc.positionAt(0),
            textDoc.positionAt(curText.length)
        );
        textEditor.edit(edit => edit.replace(fullRange, newText));
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}