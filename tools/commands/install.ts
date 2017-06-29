import FileUtil = require('../lib/FileUtil');
import utils = require('../lib/utils');

class Install implements egret.Command {
    async execute() {
        let execPath = process.execPath;
        let npmCliPath = FileUtil.joinPath(execPath, "../", "npm", "bin", "npm-cli.js");
        if(FileUtil.exists(npmCliPath)) {
            process.chdir(egret.args.projectDir);
            await utils.executeCommandWithSpawn("node", ["\"" + npmCliPath + "\"", "install"]);
        }
        else {
            utils.exit(9);
        }
        return 0;
    }
}

export = Install;
