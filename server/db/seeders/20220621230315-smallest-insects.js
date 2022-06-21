'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Insects', [
    {name:'Western Pygmy Blue Butterfly',
    description: 'It can be recognized by the copper brown and dull blue pattern at the bases of both wings',
    territory:'North America',
    fact:'Today, the order of Lepidopterous insects, currently comprise more than 180,000 species!',
    millimeters: 12
    },
    {name:'Patu Digua Spider',
      description:'They’re hard to spot as the males grow to be about only a third of a millimeter, smaller than even the head of a pin',
      territory: 'northern Colombia',
      fact: 'Generally, male spiders are smaller than the females.',
      millimeters:0.33333
    },
    {name: 'Scarlet Dwarf Dragonfly',
      description: 'dragonflies are among the largest flying bugs.',
      territory: 'Southeast Asia to China and Japan',
      fact:'Fossil records show it lived as far back as 300 million years ago during the Triassic period',
      millimeters: 20
    },
    {name: 'Midget Moths',
      description: 'looking at the antennae, butterfly antennae have a tiny ball tip compared to moths who don’t.',
      territory: 'North America',
      fact: 'The Melanitis leda or common evening brown, for example, is considered a night-dwelling butterfly',
      millimeters: 25
    },
    {name: 'Bolbe Pygmaea Mantis',
      description: 'The order of Mantodea consists of more than 2,400 species and can be as large is 3.5 inches standing upright',
      territory: 'Australia',
      fact: 'the ancient Greeks considered the mantis to have supernatural powers',
      millimeters: 80
    }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Insects');
  }
};
