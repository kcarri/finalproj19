const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'You are a seasoned adventurer. You have been given the title...',
    options: [
      {
        text: 'Wake of the Ancients',
        setState: { ancients: true },
        nextText: 2
      },
      {
        text: 'Guardian of Light',
        setState: { guardian: true },
        nextText: 3
      },
      {
        text: 'The Fallen',
        setState: { fallen: true },
        nextText: 4
      },
      {
        text: 'Elenor\'s Bane',
        setState: { elenor: true },
        nextText: 5
      }
    ]
  },
  {
    id: 2,
    text: 'Wake of the Ancients, after being given the dark secrets of the past, to harness otherworldly magicks and make them your own.',
    options: [
      {
        text: 'Begin your story',
        nextText: 6
      }
    ]
  },
  {
    id: 3,
    text: 'Guardian of Light: your righteousness has earned you powers to harness and connect with the elements themselves.',
    options: [
      {
        text: 'Begin your story',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'The Fallen, when you were cast out from your own kind. Your powers were stripped away and you were left for naught.',
    options: [
      {
        text: 'Begin your story',
        nextText: 6
      }
    ]
  },
  {
    id: 5,
    text: 'Elenor\'s Bane, after magic tempted and tore you apart. You started a new life, your memories lost, all but the ones of her...',
    options: [
      {
        text: 'Begin your story',
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    text: 'You have been sent to a mysterious forest. The task: to find the source of its unusual magic, and retrieve an enchanted sword that was lost in a previous expedition.',
    options: [
      {
        text: 'Inspect the foliage',
        nextText: 7
      },
      {
        text: 'Listen',
        nextText: 8
      },
      {
        text: 'Enter the forest',
        nextText: 9
      }
    ]
  },
  {
    id: 7,
    text: 'The leaves blaze brilliant reds, yellows, greens. It is truly breathtaking.',
    options: [
      {
        text: 'Enter the forest',
        nextText: 9
      }
    ]
  },
  {
    id: 8,
    text: 'You take a moment to listen. Birds chirp overhead. In the distance...singing?',
    options: [
      {
        text: 'Enter the forest',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    text: 'Entering the forest is like stepping through a portal. The air is full; the wind dances with the leaves as it clears a path for you; your footfalls leave a satisfying crunch in your wake.',
    options: [
      {
        text: 'Seek shelter',
        nextText: 10
      },
      {
        text: 'Watch your step',
        nextText: 11
      },
      {
        text: 'Listen',
        nextText: 12
      },
      {
        text: 'Ask for directions',
        requiredState: (currentState) => currentState.guardian,
        nextText: 13
      }
    ]
  },
  {
    id: 10,
    text: 'You immediately look for a place to rest... It doesn\'t take long before you find a grove of trees with long, gnarled branches. Perfect for a roof.',
    options: [
      {
        text: 'Build a lean-to',
        nextText: 14
      },
      {
        text: 'Just use the ground',
        nextText: 15
      }
    ]
  },
  {
    id: 11,
    text: 'You tread carefully, noticing the delicate fauna of the woods. Snails, bumblebees. You look up suddenly to notice a snake in your path.',
    options: [
      {
        text: 'Run!',
        nextText: 16
      },
      {
        text: 'Watch',
        nextText: 17
      },
      {
        text: 'Speak',
        nextText: 18
      }
    ]
  },
  {
    id: 12,
    text: 'There is an echo of frogs chirping in every direction. To the east, a familiar tune.',
    options: [
      {
        text: 'Continue on the path',
        nextText: 19
      },
      {
        text: 'Follow the voice',
        nextText: 20
      },
      {
        text: 'Sing',
        nextText: 21
      }
    ]
  },
  {
    id: 13,
    text: 'You catch a leaf in your hand and implore your divine senses. You feel the leaf tugging towards the east.',
    options: [
      {
        text: 'Continue on the path',
        nextText: 19
      },
      {
        text: 'Go east',
        nextText: 20
      }
    ]
  },
  {
    id: 14,
    text: 'The lean-to was perfect! A small rain passes over the forest, but you are snug.',
    options: [
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.ancients,
        nextText: 30
      },
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.guardian,
        nextText: 31
      },
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.fallen,
        nextText: 32
      },
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.elenor,
        nextText: 33
      }
    ]
  },
  {
    id: 15,
    text: 'A light rain begins...it\'s cold, but thankfully the treetops give you some cover.',
    options: [
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.ancients,
        nextText: 30
      },
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.guardian,
        nextText: 31
      },
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.fallen,
        nextText: 32
      },
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.elenor,
        nextText: 33
      }
    ]
  },
  //RUN
  {
    id: 16,
    text: 'You don\'t look back until the creature is out of sight. You have lost the path.',
    options: [
      {
        text: 'Look for the path',
        nextText: 22
      },
      {
        text: 'Make camp',
        nextText: 23
      }
    ]
  },
  //WATCH
  {
    id: 17,
    text: 'Shocked into stillness, you lock eyes with the creature. It begins moving closer.',
    options: [
      {
        text: '"Wh-wh-"',
        nextText: 24
      },
      {
        text: 'Run!',
        nextText: 16
      }
    ]
  },
  //SPEAK
  {
    id: 18,
    text: '"Oh! I, uh, hello..." It does not respond, but begins to slither towards you.',
    options: [
      {
        text: '"Wait!"',
        nextText: 24
      },
      {
        text: 'Run!',
        nextText: 16
      }
    ]
  },
  //CONTINUE ON THE PATH
  {
    id: 19,
    text: 'You keep to the path, breathing in the fresh crisp air. After a while of traveling, you spot a snake in your path.',
    options: [
      {
        text: 'Run!',
        nextText: 16
      },
      {
        text: 'Watch',
        nextText: 17
      },
      {
        text: 'Speak',
        nextText: 18
      }
    ]
  },
  //GO EAST
  {
    id: 20,
    text: 'You leave the path. The deeper in the forest you travel, the more dense it grows together. You become hopelessly lost.',
    options: [
      {
        text: 'Listen',
        nextText: 25
      },
      {
        text: 'Make camp',
        nextText: 23
      },
      {
        text: 'Regret',
        requiredState: (currentState) => currentState.ancients,
        nextText: 26
      },
      {
        text: 'Regret',
        requiredState: (currentState) => currentState.guardian,
        nextText: 27
      },
      {
        text: 'Regret',
        requiredState: (currentState) => currentState.fallen,
        nextText: 28
      },
      {
        text: 'Regret',
        requiredState: (currentState) => currentState.elenor,
        nextText: 29
      }
    ]
  },
  {
    id: 21,
    text: 'You sing aloud, your voice echoing amongst the trees, and wait for an answer. ........ There is none. You feel a little stupid.',
    options: [
      {
        text: 'Continue on the path',
        nextText: 19
      },
      {
        text: 'Wander into the woods',
        nextText: 20
      }
    ]
  },
  //LOOK FOR THE PATH
  {
    id: 22,
    text: 'Your cowardice has cost you your senses. You are lost, and it grows dark.',
    options: [
      {
        text: 'Make camp',
        nextText: 23
      }
    ]
  },
  //MAKE CAMP
  {
    id: 23,
    text: 'You find a large tree and make camp at its roots. The moon bathes your world in a soft glow.',
    options: [
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.ancients,
        nextText: 30
      },
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.guardian,
        nextText: 31
      },
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.fallen,
        nextText: 32
      },
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.elenor,
        nextText: 33
      }
    ]
  },
  //SNAKE SPEAKS
  {
    id: 24,
    text: 'ฬђคՇ เร Շђเร ๓คﻮเς ץ๏ย รєєк',
    options: [
      {
        text: 'RUN!',
        nextText: 16
      }
    ]
  },
  {
    id: 25,
    text: 'The faint notes of a song have faded to silence. Now...crickets, frogs, and nightfall.',
    options: [
      {
        text: 'Make camp',
        nextText: 23
      }
    ]
  },
//REGRET
{
  id: 26,
  text: 'I must...I must consult my magicks....They will surely know what to do.',
  options: [
    {
      text: 'Make camp',
      nextText: 23
    }
  ]
},
{
  id: 27,
  text: 'The spirits are counting on me! They can\'t have chosen the wrong hero...',
  options: [
    {
      text: 'Make camp',
      nextText: 23
    }
  ]
},
{
  id: 28,
  text: 'My socks are wet. This sucks.',
  options: [
    {
      text: 'Make camp',
      nextText: 23
    }
  ]
},
{
  id: 29,
  text: 'No. No time for regret. I must redeem myself. No matter the cost.',
  options: [
    {
      text: 'Make camp',
      nextText: 23
    }
  ]
},


  // DREAM SEQUENCES
  {
    id: 30,
    text: 'You feel the pull of magical forces...fighting amongst each other, in a fruitless effort to control what cannot ever be theirs.... In your hands is a sword. Something that can stop the fighting. For good.',
    options: [
      {
        text: 'Wake up, adventurer',
        nextText: 34
      }
    ]
  },
  {
    id: 31,
    text: 'You hear the spirits cry out. They are hurt...victims of a raging battle. They cry out for help, for protection. Can you save them, reader?',
    options: [
      {
        text: 'Wake up, adventurer',
        nextText: 34
      }
    ]
  },
  {
    id: 32,
    text: 'You see the faces of the people who cast you out. Faces of people you once trusted, now twisted in scorn as they look upon you. But you see vines twisting around their feet as they fall prey to their own greed.',
    options: [
      {
        text: 'Wake up, adventurer',
        nextText: 34
      }
    ]
  },
  {
    id: 33,
    text: 'The morning air fills with song as you run through the forest. Your wife, always a step ahead of you, her back turned to you as she continues to walk... You reach out to grab her, but you can\'t catch up... Elenor....Elenor, please!',
    options: [
      {
        text: 'Wake up, adventurer',
        nextText: 34
      }
    ]
  },

  //BEGIN DAY 2
  {
    id: 34,
    text: 'You wake to a warm sunrise. Another day in this forest.',
    options: [
      {
        text: 'Seek food',
        setState: { insight: true },
        nextText: 35
      },
      {
        text: 'Call upon your magic',
        requiredState: (currentState) => currentState.ancients,
        setState: { sword: true },
        nextText: 36
      },
      {
        text: 'Call to the spirits',
        requiredState: (currentState) => currentState.guardian,
        setState: { strong: true },
        nextText: 37
      },
      {
        text: 'Curse',
        requiredState: (currentState) => currentState.fallen,
        setState: { disenchanted: true },
        nextText: 38
      },
      {
        text: 'Call to Elenor',
        requiredState: (currentState) => currentState.elenor,
        setState: { alert: true },
        nextText: 39
      },
      {
        text: 'Make camp',
        nextText:40
      },
      {
        text: 'Venture onward',
        nextText:41
      }
    ]
  },
  {
    id: 35,
    text: 'You find a large berry bush sliced cleanly in half. Parts of its body is burnt, but there are still berries intact. You gather enough for a hearty snack.',
    options: [
      {
        text: 'Continue on',
        nextText: 41
      }
    ]
  },
  {
    id: 36,
    text: 'Your eyes close. Visions of the battle again play in your mind, and something grows hot in your grasp. When you open your eyes, a sword is clasped in your hands.',
    options: [
      {
        text: 'Inspect the sword',
        nextText: 44
      }
    ]
  },
  {
    id: 44,
    text: 'It radiates power and makes you feel...angry.',
    options: [
      {
        text: 'Continue on',
        nextText: 41
      }
    ]
  },
  {
    id: 37,
    text: 'You call to the elements and promise them protection from those that wish to harm them. You feel a little stronger.',
    options: [
      {
        text: 'Continue on',
        nextText: 41
      }
    ]
  },
  {
    id: 38,
    text: 'You say a bad word. Do you feel better now?',
    options: [
      {
        text: 'Continue on',
        nextText: 41
      }
    ]
  },
  {
    id: 39,
    text: 'You close your eyes and cling to the song from your dream. It\'s almost as if you can feel her presence. But she can\'t have..survived?',
    options: [
      {
        text: 'Continue on',
        nextText: 41
      }
    ]
  },
  {
    id: 40,
    text: 'You begin to look for-- wait, make camp? You just woke up!',
    options: [
      {
        text: 'But I\'m tired',
        nextText: 42
      },
      {
        text: 'Fine, continue on',
        nextText: 41
      }
    ]
  },
  {
    id: 42,
    text: 'I will fight you',
    options: [
      {
        text: 'What??',
        nextText: 43
      }
    ]
  },
  {
    id: 43,
    text: 'Don\'t sass me',
    options: [
      {
        text: 'Okay, okay! Continue on',
        nextText: 41
      }
    ]
  },
//CONTINUE ON
  {
    id: 41,
    text: 'The trees grow thicker and taller the farther in you traverse, and eventually, you find yourself blocked by a wall of brambles.',
    options: [
      {
        text: 'Inspect the brambles',
        nextText: 45
      },
      {
        text: 'Inspect the area',
        nextText: 46
      },
      {
        text: 'Look for burn-marks',
        requiredState: (currentState) => currentState.insight,
        nextText: 49
      },
      {
        text: 'Use the sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 50
      },
      {
        text: 'Release the elements',
        requiredState: (currentState) => currentState.strong,
        nextText: 51
      },
      {
        text: 'Curse a little louder',
        requiredState: (currentState) => currentState.disenchanted,
        nextText: 52
      },
      {
        text: 'Push through',
        requiredState: (currentState) => currentState.alert,
        nextText: 53
      }
    ]
  },
  {
    id: 45,
    text: 'They extend as far to your left and right as you can see, effectively blocking the path.',
    options: [
      {
        text: 'Inspect the area',
        nextText: 46
      },
      {
        text: 'Look for burn-marks',
        requiredState: (currentState) => currentState.insight,
        nextText: 49
      },
      {
        text: 'Use the sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 50
      },
      {
        text: 'Release the elements',
        requiredState: (currentState) => currentState.strong,
        nextText: 51
      },
      {
        text: 'Curse a little louder',
        requiredState: (currentState) => currentState.disenchanted,
        nextText: 52
      },
      {
        text: 'Push through',
        requiredState: (currentState) => currentState.alert,
        nextText: 53
      }
    ]
  },
  {
    id: 46,
    text: 'There are ancient trees all around you, with large branches that seem to bow around you.',
    options: [
      {
        text: 'Use a branch',
        setState: { branch: true },
        nextText: 47
      },
      {
        text: 'Climb a tree',
        nextText: 48
      },
      {
        text: 'Look for burn-marks',
        requiredState: (currentState) => currentState.insight,
        nextText: 49
      },
      {
        text: 'Use the sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 50
      },
      {
        text: 'Release the elements',
        requiredState: (currentState) => currentState.strong,
        nextText: 51
      },
      {
        text: 'Curse a little louder',
        requiredState: (currentState) => currentState.disenchanted,
        nextText: 52
      },
      {
        text: 'Push through',
        requiredState: (currentState) => currentState.alert,
        nextText: 53
      }
    ]
  },
  {
    id: 47,
    text: 'You snap a branch from a tree and hack your way through the brambles.',
    options: [
      {
        text: 'Continue on',
        nextText: 55
      }
    ]
  },
  {
    id: 48,
    text: 'You find a sturdy branch to balance yourself upon. With some effort, you make your way from branch to branch, up and over the obstacle in your way.',
    options: [
      {
        text: 'Continue on',
        nextText: 55
      }
    ]
  },

  //SPECIAL OPTIONS
  {
    id: 49,
    text: 'Remembering the burnt berry bush, you take a step back and inspect your surroundings. Sure enough, there is a small patch of brambles that has been similarly hacked and sliced apart. You are able to push through the opening with ease.',
    requiredState: (currentState) => currentState.insight,
    options: [
      {
        text: 'Continue on',
        nextText: 55
      }
    ]
  },
  {
    id: 50,
    text: 'You feel a sudden rush of adrenaline as the sword\'s blade glows red-hot. You take a swing, and the brambles fall, as if you were cutting wheat.',
    requiredState: (currentState) => currentState.sword,
    options: [
      {
        text: 'Continue on',
        nextText: 55
      }
    ]
  },
  {
    id: 51,
    text: 'You feel a sudden calm as you step forward, placing your hand on the obstacle in front of you. The air itself seems to fall silent as, with a creaaaaaak, the brambles shift and writhe open, creating an elegant archway around you.',
    requiredState: (currentState) => currentState.strong,
    options: [
      {
        text: 'Continue on',
        nextText: 55
      },
    ]
  },
  {
    id: 52,
    text: 'You feel a pull from your chest as you attempt to release the magic you once had inside. The world suddenly turns dark in front of your eyes, and you feel a searing pain along your arms. When your vision returns, a sword is embedded in the dirt in front of you.',
    requiredState: (currentState) => currentState.disenchanted,
    setState: { sword: true },
    options: [
      {
        text: 'Slash the brambles',
        nextText: 54
      }
    ]
  },
  {
    id: 54,
    text: 'It\'s like cutting butter. The brambles fall under the sheer weight of the sword. You feel empowered.',
    requiredState: (currentState) => currentState.disenchanted,
    options: [
      {
        text: 'Continue on',
        nextText: 55
      }
    ]
  },
  {
    id: 53,
    text: 'You feel her presence! You feel a cold panic rising in your chest as you begin to dig, dig through the weeds with a growing desperation to see the only key to your past. Through, and through, until your hands are rubbed raw, but you finally carve your way through.',
    requiredState: (currentState) => currentState.alert,
    options: [
      {
        text: 'Continue on',
        nextText: 55
      }
    ]
  },
  //CONTINUE ON
  {
    id: 55,
    text: 'TBC',
    options: [
      {
        text: 'Begin again',
        nextText: -1
      }
    ]
  }




/*
{
  id: 22,
  text: '',
  options: [
    {
      text: '',
      nextText: NUMBER
    },
    {
      text: '',
      nextText: NUMBER
    }
  ]
},
{
  id: 23,
  text: '',
  options: [
    {
      text: 'Continue on the path',
      nextText: NUMBER
    },
    {
      text: 'Wander into the woods',
      nextText: NUMBER
    }
  ]
},
*/

]

startGame()
