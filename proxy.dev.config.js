module.exports = [
{
    url: ['/api'],
    config: {
        // target: 'http://45.77.202.110:3001', // target host
        target: 'http://localhost:3001', // target host
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
            '^/api': '' // remove base path
        },
        router: {
        },
        onError: function(err, req, res) {
            if (err) {
                console.error(err.stack);
            }
        },
        onProxyRes: function(proxyRes, req, res) {
            //console.log(proxyRes);
        },
        onProxyReq: function(proxyReq, req, res) {
            //console.log(proxyReq);
        }
    }
},
// {
//     url: ['/API'],
//     config: {
//         target: 'http://api.xinxiuw.cn', // target host
//         changeOrigin: true, // needed for virtual hosted sites
//         pathRewrite: {
//             '^/API': '' // remove base path
//         },
//         router: {
//         },
//         onError: function(err, req, res) {
//             if (err) {
//                 console.error(err.stack);
//             }
//         },
//         onProxyRes: function(proxyRes, req, res) {
//             //console.log(proxyRes);
//         },
//         onProxyReq: function(proxyReq, req, res) {
//             //console.log(proxyReq);
//         }
//     }
// }
];
