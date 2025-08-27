const myUrl = new URL('https://example.org:81/foo/bar?baz=qux#quux');
console.log(myUrl.href);         // 'https://example.org:81/foo/bar?baz=qux#quux'
console.log(myUrl.origin);       // 'https://example.org:81'
console.log(myUrl.protocol);     // 'https:'
console.log(myUrl.host);         // 'example.org:81'
console.log(myUrl.hostname);     // 'example.org'
console.log(myUrl.port);         // '81'
console.log(myUrl.pathname);     // '/foo/bar'
console.log(myUrl.search);       // '?baz=qux'
console.log(myUrl.searchParams); // URLSearchParams { 'baz' => 'qux' }
console.log(myUrl.hash);         // '#quux'
console.log(myUrl.toString());   // 'https://example.org:81/foo/bar?baz=qux#quux'