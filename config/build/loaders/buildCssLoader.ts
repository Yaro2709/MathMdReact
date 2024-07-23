import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from js strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, //довление louder для css
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')), //опеределяем для css, что метод `css modules` применяется только для файлов, который содержат `.module.`
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]', //генерация имен при `prod` версии и настоящие название ccs файлов при `dev` сборке.
                        // Поддержка старх именных импортов
                        namedExport: false,
                        exportLocalsConvention: 'as-is'
                    },
                }
            },
            // Compiles Sass to CSS
            'sass-loader',
        ]
    };
}
