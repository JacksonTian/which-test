import os from "os";
import cp from "child_process";

function exec(command) {
    return new Promise((resolve, reject) => {
        cp.exec(command, (error, stdout, stderr) => {
            resolve({ error, stdout, stderr });
        });
    });
}

const results = await exec('where aliyun');
console.log(results);

const whichresults = await exec('which aliyun');
console.log(whichresults);

const aliyun = await exec('aliyun version');
console.log(aliyun);
