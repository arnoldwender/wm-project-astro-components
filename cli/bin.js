#!/usr/bin/env node
/**
 * WenderMedia Astro Components CLI
 *
 * Scaffolding tool for creating new Astro projects with WenderMedia components.
 *
 * Usage:
 *   npx @wendermedia/astro-components create my-project
 *   npx create-wm-component my-project
 */

import { createProject, addComponent, listTemplates, showHelp } from './index.js';

const args = process.argv.slice(2);
const command = args[0];
const projectName = args[1];

const flags = {
  template: args.find(a => a.startsWith('--template='))?.split('=')[1] || 'default',
  force: args.includes('--force') || args.includes('-f'),
  skipInstall: args.includes('--skip-install'),
  packageManager: args.find(a => a.startsWith('--pm='))?.split('=')[1] || 'npm',
  help: args.includes('--help') || args.includes('-h'),
};

async function main() {
  if (flags.help || !command) {
    showHelp();
    process.exit(0);
  }

  switch (command) {
    case 'create':
      if (!projectName) {
        console.error('\x1b[31mError: Project name is required\x1b[0m');
        console.log('Usage: npx @wendermedia/astro-components create <project-name>');
        process.exit(1);
      }
      await createProject(projectName, flags);
      break;

    case 'add':
      if (!projectName) {
        console.error('\x1b[31mError: Component name is required\x1b[0m');
        console.log('Usage: npx @wendermedia/astro-components add <component-name>');
        process.exit(1);
      }
      await addComponent(projectName, flags);
      break;

    case 'list':
      listTemplates();
      break;

    default:
      // If command looks like a project name, assume 'create'
      if (!command.startsWith('-')) {
        await createProject(command, flags);
      } else {
        console.error(`\x1b[31mUnknown command: ${command}\x1b[0m`);
        showHelp();
        process.exit(1);
      }
  }
}

main().catch((error) => {
  console.error('\x1b[31mError:\x1b[0m', error.message);
  process.exit(1);
});
