import { IEnemyShipsConf } from '@/types/game'

export const ENEMY_SHIPS: IEnemyShipsConf = {
  klaed: {
    maxEnemyImageSizeHeight: 103,
    ship: {
      battlecruiser: {
        image: {
          url: 'images/enemy/klaed/klaed_battlecruiser.png',
          sw: 72,
          sh: 91,
          frameRate: 6,
        },
        weapon: 'bigSpaceGun',
        damageLimit: 1,
        helthPoint: 200,
        velocity: { vx: 1, vy: 1.2, speedAdjustment: 100 },
        score: 400,
      },
      bomber: {
        image: {
          url: 'images/enemy/klaed/klaed_bomber.png',
          sw: 30,
          sh: 34,
          frameRate: 6,
        },
        damageLimit: 0.25,
        helthPoint: 100,
        weapon: 'rocket',
        velocity: { vx: 1, vy: 1.3, speedAdjustment: 100 },
        score: 200,
      },
      dreadnought: {
        image: {
          url: 'images/enemy/klaed/klaed_dreadnought.png',
          sw: 72,
          sh: 103,
          frameRate: 6,
        },
        damageLimit: 1,
        helthPoint: 200,
        weapon: 'bigSpaceGun',
        velocity: { vx: 1, vy: 1, speedAdjustment: 100 },
        score: 500,
      },
      fighter: {
        image: {
          url: 'images/enemy/klaed/klaed_fighter.png',
          sw: 24,
          sh: 27,
          frameRate: 6,
        },
        damageLimit: 0.5,
        helthPoint: 100,
        weapon: 'rocket',
        velocity: { vx: 1, vy: 1.3, speedAdjustment: 100 },
        score: 150,
      },
      frigate: {
        image: {
          url: 'images/enemy/klaed/klaed_frigate.png',
          sw: 36,
          sh: 43,
          frameRate: 6,
        },
        damageLimit: 0.75,
        helthPoint: 100,
        weapon: 'cannonBullet',
        velocity: { vx: 1, vy: 1.1, speedAdjustment: 100 },
        score: 200,
      },
      scout: {
        image: {
          url: 'images/enemy/klaed/klaed_scout.png',
          sw: 22,
          sh: 27,
          frameRate: 6,
        },
        damageLimit: 0.25,
        helthPoint: 100,
        weapon: 'greanBlast',
        velocity: { vx: 1, vy: 1.5, speedAdjustment: 100 },
        score: 100,
      },
      support: {
        image: {
          url: 'images/enemy/klaed/klaed_support.png',
          sw: 28,
          sh: 32,
          frameRate: 6,
        },
        damageLimit: 0.25,
        helthPoint: 100,
        weapon: 'orangeBlast',
        velocity: { vx: 1, vy: 1.3, speedAdjustment: 100 },
        score: 100,
      },
      torpedo: {
        image: {
          url: 'images/enemy/klaed/klaed_torpedo.png',
          sw: 58,
          sh: 28,
          frameRate: 6,
        },
        damageLimit: 0.75,
        helthPoint: 100,
        weapon: 'rocket',
        velocity: { vx: 1, vy: 1.2, speedAdjustment: 100 },
        score: 300,
      },
    },
  },
  nairan: {
    maxEnemyImageSizeHeight: 109,
    ship: {
      battlecruiser: {
        image: {
          url: 'images/enemy/nairan/nairan_battlecruiser.png',
          sw: 62,
          sh: 96,
          frameRate: 6,
        },
        weapon: 'bigSpaceGun',
        damageLimit: 1,
        helthPoint: 200,
        velocity: { vx: 1, vy: 1.2, speedAdjustment: 100 },
        score: 400,
      },
      bomber: {
        image: {
          url: 'images/enemy/nairan/nairan_bomber.png',
          sw: 32,
          sh: 42,
          frameRate: 6,
        },
        damageLimit: 0.25,
        helthPoint: 100,
        weapon: 'rocket',
        velocity: { vx: 1, vy: 1.3, speedAdjustment: 100 },
        score: 200,
      },
      dreadnought: {
        image: {
          url: 'images/enemy/nairan/nairan_dreadnought.png',
          sw: 68,
          sh: 109,
          frameRate: 6,
        },
        damageLimit: 1,
        helthPoint: 200,
        weapon: 'bigSpaceGun',
        velocity: { vx: 1, vy: 1, speedAdjustment: 100 },
        score: 500,
      },
      fighter: {
        image: {
          url: 'images/enemy/nairan/nairan_fighter.png',
          sw: 30,
          sh: 40,
          frameRate: 6,
        },
        damageLimit: 0.5,
        helthPoint: 100,
        weapon: 'rocket',
        velocity: { vx: 1, vy: 1.3, speedAdjustment: 100 },
        score: 150,
      },
      frigate: {
        image: {
          url: 'images/enemy/nairan/nairan_frigate.png',
          sw: 42,
          sh: 55,
          frameRate: 6,
        },
        damageLimit: 0.75,
        helthPoint: 100,
        weapon: 'cannonBullet',
        velocity: { vx: 1, vy: 1.1, speedAdjustment: 100 },
        score: 200,
      },
      scout: {
        image: {
          url: 'images/enemy/nairan/nairan_scout.png',
          sw: 24,
          sh: 34,
          frameRate: 6,
        },
        damageLimit: 0.25,
        helthPoint: 100,
        weapon: 'greanBlast',
        velocity: { vx: 1, vy: 1.5, speedAdjustment: 100 },
        score: 100,
      },
      support: {
        image: {
          url: 'images/enemy/nairan/nairan_support.png',
          sw: 32,
          sh: 34,
          frameRate: 6,
        },
        damageLimit: 0.25,
        helthPoint: 100,
        weapon: 'orangeBlast',
        velocity: { vx: 1, vy: 1.3, speedAdjustment: 100 },
        score: 100,
      },
      torpedo: {
        image: {
          url: 'images/enemy/nairan/nairan_torpedo.png',
          sw: 54,
          sh: 34,
          frameRate: 6,
        },
        damageLimit: 0.75,
        helthPoint: 100,
        weapon: 'rocket',
        velocity: { vx: 1, vy: 1, speedAdjustment: 100 },
        score: 300,
      },
    },
  },
  nautolan: {
    maxEnemyImageSizeHeight: 103,
    ship: {
      battlecruiser: {
        image: {
          url: 'images/enemy/nautolan/nautolan_battlecruiser.png',
          sw: 72,
          sh: 89,
          frameRate: 6,
        },
        weapon: 'bigSpaceGun',
        damageLimit: 1,
        helthPoint: 200,
        velocity: { vx: 1, vy: 1.2, speedAdjustment: 100 },
        score: 400,
      },
      bomber: {
        image: {
          url: 'images/enemy/nautolan/nautolan_bomber.png',
          sw: 30,
          sh: 39,
          frameRate: 6,
        },
        damageLimit: 0.25,
        helthPoint: 100,
        weapon: 'rocket',
        velocity: { vx: 1, vy: 1.3, speedAdjustment: 100 },
        score: 200,
      },
      dreadnought: {
        image: {
          url: 'images/enemy/nautolan/nautolan_dreadnought.png',
          sw: 72,
          sh: 103,
          frameRate: 6,
        },
        damageLimit: 1,
        helthPoint: 200,
        weapon: 'bigSpaceGun',
        velocity: { vx: 1, vy: 1, speedAdjustment: 100 },
        score: 500,
      },
      fighter: {
        image: {
          url: 'images/enemy/nautolan/nautolan_fighter.png',
          sw: 32,
          sh: 44,
          frameRate: 6,
        },
        damageLimit: 0.5,
        helthPoint: 100,
        weapon: 'rocket',
        velocity: { vx: 1, vy: 1.3, speedAdjustment: 100 },
        score: 150,
      },
      frigate: {
        image: {
          url: 'images/enemy/nautolan/nautolan_frigate.png',
          sw: 46,
          sh: 49,
          frameRate: 6,
        },
        damageLimit: 0.75,
        helthPoint: 100,
        weapon: 'cannonBullet',
        velocity: { vx: 1, vy: 1.1, speedAdjustment: 100 },
        score: 200,
      },
      scout: {
        image: {
          url: 'images/enemy/nautolan/nautolan_scout.png',
          sw: 32,
          sh: 35,
          frameRate: 6,
        },
        damageLimit: 0.25,
        helthPoint: 100,
        weapon: 'greanBlast',
        velocity: { vx: 1, vy: 1.5, speedAdjustment: 100 },
        score: 100,
      },
      support: {
        image: {
          url: 'images/enemy/nautolan/nautolan_support.png',
          sw: 32,
          sh: 42,
          frameRate: 6,
        },
        damageLimit: 0.25,
        helthPoint: 100,
        weapon: 'orangeBlast',
        velocity: { vx: 1, vy: 1.3, speedAdjustment: 100 },
        score: 100,
      },
      torpedo: {
        image: {
          url: 'images/enemy/nautolan/nautolan_torpedo.png',
          sw: 58,
          sh: 31,
          frameRate: 6,
        },
        damageLimit: 0.75,
        helthPoint: 100,
        weapon: 'rocket',
        velocity: { vx: 1, vy: 1.2, speedAdjustment: 100 },
        score: 300,
      },
    },
  },
  die: {
    url: 'images/enemy/enemy-die.png',
    sw: 100,
    sh: 100,
    frameRate: 1,
    loop: false,
  },
}