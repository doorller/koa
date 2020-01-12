function takeTime() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('then获取值。。')
        }, 1000);
    })
}
async function test() {
    const v = await takeTime();
    console.log(v)
}
test();
/**
 *
 */
