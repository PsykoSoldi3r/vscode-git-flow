// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { MainTreeViewProvider } from './treeviews/MainTreeViewProvider';
import { BranchTreeViewProvider } from './treeviews/BranchTreeViewProvider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const mainTreeViewProvider = new MainTreeViewProvider();
	vscode.window.registerTreeDataProvider("gitflow.views.main", mainTreeViewProvider);

	const featureTreeViewProvider = new BranchTreeViewProvider("feature");
	vscode.window.registerTreeDataProvider("gitflow.views.feature", featureTreeViewProvider);

	vscode.commands.registerCommand("gitflow.refresh", () => mainTreeViewProvider.refresh() );
}

// this method is called when your extension is deactivated
export function deactivate() {}
