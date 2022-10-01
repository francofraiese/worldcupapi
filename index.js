const { conn } = require('./src/db.js');

conn.sync({ force: false }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running`);
  });
});
