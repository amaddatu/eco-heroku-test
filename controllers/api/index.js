const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const seedDatabase = require('../../seeds/seed');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

router.post('/seedDatabase', (req, res) => {
  seedDatabase(function(){
    res.json({
      message: "completed seed"
    })
  });
});

module.exports = router;
