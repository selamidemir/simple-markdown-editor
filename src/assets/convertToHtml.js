export const convetToHtml = (content) => {
    let pattern = /######.*\n/g;

    // unoredered list
    pattern = /(\*.*\n)/g;
    if (pattern.test(content)) {
        const mached = content.match(pattern);
        // const copyMached = [...mached];
        // content = content.replace(mached, `<ul>${mached}</ul>`);
        // console.log(mached)
        // console.log(copyMached)
        // copyMached[0].replace(/\*/, '<li>');
        // copyMached[0].replace(/\n/, '</li>');
        // content = content.replace(mached, copyMached);
        // console.log(mached);
        // mached = mached[0].slice(' ')
        // mached[0] = `<ul>${mached[0]}`;
        // mached[mached.length-1] = `${mached[mached.length-1]}</ul>`;
        let list = '';
        mached.forEach(item => list += `<li>${item.slice(1, item.length - 1)}</li>`);
        list = `<ul>${list}</ul>`;
        const machedStr = mached.toString().replace(/\n,/g, '\n');
        console.log(mached, machedStr)
        content = content.replace(machedStr, list);
    }

    // delete
    pattern = /~~.*~~/g;
    if (pattern.test(content)) {
        const mached = content.match(pattern);
        mached.map(item => content = content.replace(item, `<del>${item.slice(2, item.length - 2)}</del>`));
    }

    // monospace
    pattern = /`.*`/g;
    if (pattern.test(content)) {
        const mached = content.match(pattern);
        mached.map(item => content = content.replace(item, `<code>${item.slice(1, item.length - 1)}</code>`));
    }

    // bold - italic
    pattern = /\*\*\*.*\*\*\*/g;
    if (pattern.test(content)) {
        const mached = content.match(pattern);
        mached.map(item => content = content.replace(item, `<b><i>${item.slice(3, item.length - 3)}</i></b>`));
    }

    // bold
    pattern = /\*\*.*\*\*/g;
    if (pattern.test(content)) {
        const mached = content.match(pattern);
        mached.map(item => content = content.replace(item, `<b>${item.slice(2, item.length - 2)}</b>`));
    }

    // italic
    pattern = /\*.*\*/g;
    if (pattern.test(content)) {
        const mached = content.match(pattern);
        mached.map(item => content = content.replace(item, `<i>${item.slice(1, item.length - 1)}</i>`));
    }

    // headers h1 - h6
    pattern = /######.*\n/g;
    if (pattern.test(content)) {
        const mached = content.match(pattern);
        mached.map(item => content = content.replace(item, `<h6>${item.slice(5)}</h6>`));
    }

    pattern = /#####.*\n/g;
    if (pattern.test(content)) {
        const mached = content.match(pattern);
        mached.map(item => content = content.replace(item, `<h5>${item.slice(5)}</h5>`));
    }

    pattern = /####.*\n/g;
    if (pattern.test(content)) {
        const mached = content.match(pattern);
        mached.map(item => content = content.replace(item, `<h4>${item.slice(4)}</h4>`));
    }

    pattern = /###.*\n/g;
    if (pattern.test(content)) {
        const mached = content.match(pattern);
        mached.map(item => content = content.replace(item, `<h3>${item.slice(3)}</h3>`));
    }

    pattern = /##.*\n/g;
    if (pattern.test(content)) {
        const mached = content.match(pattern);
        mached.map(item => content = content.replace(item, `<h2>${item.slice(2)}</h2>`));
    }


    pattern = /#.*\n/g;
    if (pattern.test(content)) {
        const mached = content.match(pattern);
        mached.map(item => content = content.replace(item, `<h1>${item.slice(1)}</h1>`));
    }

    return content;
}