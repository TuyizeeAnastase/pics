module.exports = (sequelize, DataTypes) => {
  const todo_list_table = sequelize.define('todo_list_table', {
    list: DataTypes.STRING,
    author: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  return todo_list_table;
};