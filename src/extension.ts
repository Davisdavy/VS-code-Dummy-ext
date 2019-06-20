// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { settings } from 'cluster';
import{workspace,languages,Diagnostic,DiagnosticSeverity, Location, Range, Disposable,
TextDocument, Position,  QuickPickItem, window,commands} from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed


// this method is called when your extension is deactivated
export function deactivate() {}
