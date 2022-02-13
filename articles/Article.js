const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Category.hasMany(Article); //Uma categoria tem muitos artigos | 1 - M => hasMany()
Article.belongsTo(Category);  //Um artigo pertende a uma categoria | 1 - 1 => belongsTo()

//Article.sync({force: true});

module.exports = Article;