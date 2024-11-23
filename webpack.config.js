const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Установите режим на 'development'
    entry: './src/js/app.js', // Путь к вашему входному файлу
    output: {
        filename: 'bundle.js', // Название вашего выходного бандла
        path: path.resolve(__dirname, 'dist'), // Путь к выходной директории
        clean: true, // Удалять предыдущие сборки
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Шаблон HTML
            filename: 'index.html', // Название выходного HTML
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Директория для обслуживания
        },
        compress: true, // Включить gzip сжатие
        port: 9000, // Порт сервера
        open: true, // Автоматически открывать браузер
    },
};
