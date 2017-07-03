import FileUtil = require('../lib/FileUtil');
import utils = require('../lib/utils');

class Install implements egret.Command {
    async execute() {
        let execPath = process.execPath;
        let npmCliPath = FileUtil.joinPath(execPath, "../", "npm", "bin", "npm-cli.js");
        if(FileUtil.exists(npmCliPath)) {
            let commands = process.argv.slice(3);
            commands.unshift("\"" + npmCliPath + "\"");
            await utils.executeCommandWithSpawn("node", commands);
        }
        else {
            utils.exit(9);
        }
        return 0;
    }
}

export = Install;
