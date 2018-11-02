module.exports = api => {
    const env = api.env();
    //  api.cache.using(() => env === 'development');

    api.cache.never();

    const plugins = ['@babel/plugin-proposal-class-properties'];

    if (env === 'development') {
        plugins.push('react-hot-loader/babel');
    }

    return {
        presets: [
            '@babel/preset-react',
            [
                '@babel/preset-env',
                {
                    spec: true, // медленней, более строго
                    loose: false, // быстрей, менее строго
                    debug: false,
                    modules: 'commonjs', // default = commonjs
                },
            ],
        ],
        plugins,
    };
};
