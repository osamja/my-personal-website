import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
// import 'react-images/dist/react-images.min.css'; // Include CSS for react-images
import { getImageSource } from '../scripts/Routes/images';


function getJapanPics(img_name) {
  return getImageSource('travel/japan-pics/' + img_name);
}

const photos = [
    {
      src: getJapanPics('inari-mountain.jpeg'),
      width: 4,
      height: 3,
      caption: 'From the Inari Shrine, you can hike up to this mountain with a view of Kyoto',
    },
    {
      src: getJapanPics('shrine-near-arashiyama.jpeg'),
      width: 4,
      height: 3,
      caption: 'Cherry blossoms near the Arashiyama Bamboo Forest',
    },
    {
      src: getJapanPics('fire-ramen.jpeg'),
      width: 4,
      height: 3,
      caption: 'Some fire ramen',
    },
    {
      src: getJapanPics('okonomiyaki.jpeg'),
      width: 4,
      height: 3,
      caption: 'Okonomiyaki are savory Japanese pancakes',
    },
    {
      src: getJapanPics('tiny-me-osaka-castle.jpeg'),
      width: 3,
      height: 4,
      caption: 'I am tiny compared to Osaka Castle',
    },
    {
      src: getJapanPics('tennoji-park-night.jpeg'),
      width: 4,
      height: 3,
      caption: 'Tennoji Park at night',
    },
    {
      src: getJapanPics('cherry-bench.jpeg'),
      width: 3,
      height: 4,
      caption: '',
    },
    {
      src: getJapanPics('fast-food.jpeg'),
      width: 3,
      height: 4,
      caption: 'Even the fast food in Japan is so good. This chain is called Sukiya',
    },
    {
      src: getJapanPics('running-man.jpeg'),
      width: 3,
      height: 4,
      caption: 'Famous Running Man in Dotonbori district of Osaka',
    },
    {
      src: getJapanPics('spidey.jpeg'),
      width: 3,
      height: 4,
      caption: 'Spiderman in Osaka',
    },
    {
      src: getJapanPics('sakuranomiya-busy.jpeg'),
      width: 3,
      height: 4,
      caption: 'Sakuranomiya Park in Osaka during cherry blossom season',
    },
    {
      src: getJapanPics('cherry-skyline.jpeg'),
      width: 4,
      height: 3,
      caption: 'Cherry blossoms near the Osaka skyline',
    },
    {
      src: getJapanPics('me-smiling-cherry.jpeg'),
      width: 3,
      height: 4,
      caption: 'Sakura smiles',
    },
    {
      src: getJapanPics('cherrys-buildings.jpeg'),
      width: 4,
      height: 3,
      caption: 'Cherry blossoms near the Osaka skyline',
    },
    {
      src: getJapanPics('osaka-castle-park-sakura.jpeg'),
      width: 4,
      height: 3,
      caption: 'Cherry blossoms near the Arashiyama Bamboo Forest',
    },
    {
      src: getJapanPics('hanami.jpeg'),
      width: 3,
      height: 4,
      caption: 'A hanami is a picnic under the Sakura (cherry blossom) trees. A popular activity in Japan during the spring',
    },
    {
      src: getJapanPics('green-blossom.jpeg'),
      width: 3,
      height: 4,
      caption: 'Not all flowers are pink',
    },
    {
      src: getJapanPics('full-bloom.jpeg'),
      width: 4,
      height: 3,
      caption: 'Full bloom',
    },
    {
      src: getJapanPics('me-garden.jpeg'),
      width: 3,
      height: 4,
      caption: 'Me in the garden',
    },
    {
      src: getJapanPics('gold-temple.jpeg'),
      width: 3,
      height: 4,
      caption: 'All gold everything',
    },
    {
      src: getJapanPics('ryoanji.jpeg'),
      width: 3,
      height: 4,
      caption: 'Definitely visit Ryoanji Temple in Kyoto',
    },
    {
      src: getJapanPics('bloom-big.jpeg'),
      width: 3,
      height: 4,
      caption: '',
    },
    {
      src: getJapanPics('kyoto-gate.jpeg'),
      width: 4,
      height: 3,
      caption: 'Kyoto Gate',
    },
    {
      src: getJapanPics('philosophers-path.jpeg'),
      width: 4,
      height: 3,
      caption: 'Philosopher\'s Path in Kyoto',
    },
    {
      src: getJapanPics('hot-pink.jpeg'),
      width: 4,
      height: 3,
      caption: '',
    },
    // {
    //   src: getJapanPics('shrine-near-arashiyama.jpeg'),
    //   width: 4,
    //   height: 3,
    //   caption: 'Cherry blossoms near the Arashiyama Bamboo Forest',
    // },
];

export default function Japan23() {
  const [currentImage, setCurrentImage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setModalIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setModalIsOpen(false);
  };

  const gotoPrevious = () => {
    setCurrentImage((currentImage) => currentImage - 1);
  };

  const gotoNext = () => {
    setCurrentImage((currentImage) => currentImage + 1);
  };

  return (
    <div className="Bio" style={{color: '#e0e0e0', textAlign: 'left', margin: '5%'}}>
      {/* <div>
        <h2>Travels in Japan</h2>
        <p>
            I was studying AI at the beginning of this year, and I figured why not study from Japan?
            Especially since I was able to book a flight from San Jose to Tokyo for 
            $250 dollars hehe :)  So I booked a flight and I'm here for three months.  Mostly spending my time between Kyoto and Osaka.
        </p>
        <h4>
            What I learned
        </h4>
        <ul>
          <li>Japanese people are very polite.  I try to be considerate to those around me, so I really appreciated people trying to be good towards one another</li>
          <li>In Osaka only, people stand on the right side of the elevator.  Everywhere else in Japan, you stand on the left.  idk</li>
          <li>On the bus, you will pay on the way out.</li>
        </ul>

        <h4>My recommendation for people visiting Japan</h4>
        <ul>
          <li>Add the Pasmo or Suica card in your Apple Pay Transit or Wallet app.  Your phone is now your ticket, all payments are electronic, just touch and go.  No fumbling with cash or paper tickets.  You can use these cards at convenience stores too.</li>
          <li>Learn some basic Japanese phrases.  After finishing my dinner,  I said “Goucisosama Deshita” to the restaurant staff and they all got happy and cheered for me.  It was awesome.  And people respect foreigners trying to learn and embrace their culture.  Speak some Nihongo, make mistakes, it will be beautiful.</li>
          <li>Go to the snack section of grocery stores.  The bakery section has stuff you will not find at home.  The drink section offers large bottled milk tea... delicous milk tea!</li>
          <li>Use the Meetup apps to find cool events near you.  I joined a basketball, web developer, and Western Philosophy group, met some awesome people, and gave a presentation on a decentralized protocol to my webdev group.</li>
          <li>ChatGPT is your friend when trying to learn Japanese.  Ask it some useful phrases like “how to order food in Japanese”.</li>
          <li>Japan is an awesome country.  If you enjoyed your stay, and want to return, consider learning the language long term.  Japanese is difficult, but could you learn it in 10 years?  Probably, so why not start now and spend a little bit of time daily.  Learning a new language unlocks a new universe into that culture’s people, music, movies, and books.  Two places I want to visit often are Italy and Japan.  I’m hoping to get more familiar with both languages over a long period of time.  I don’t care about making mistakes or embarrassing myself , I just want to be able to understand my fellow humans and have them understand me.  Embrace the embarrassment with the carelessness of a child, the learning accelerates.</li>
        </ul>

        <h4>Useful Japanese phrases</h4>
        <p>As a general language rule, I would prioritize learning how to order food in Japanese.  Personal consumption is an awesome motivator for language learning. Learning Japanese  => Yummy food => Wanting to learn more Japanese</p>
        <ul>
          <li>Thank you: Arigatou Gozaimasu</li>
          <li>Could I have this please? : Kore wa Kudasai?</li>
          <li>Good morning: Ohayou Gozaimasu</li>
          <li>Long time no see!: Ohisashiburi Desu</li>
        </ul>
        <p>Duolingo may not be what ultimately teaches you Japanese, but it is not a bad way to spend time.  It is a pretty smooth way to spend time with the language and develop foundational learning (Hiragana, Katakana, etc.).</p>
        <p>Japan is an awesome country.  If you enjoyed your stay, and want to return, consider learning the language long term.  Japanese is difficult, but could you learn it in 10 years?  Probably, so why not start now and spend a little bit of time daily.  Learning a new language unlocks a new universe into that culture’s people, music, movies, and books.  Two places I want to visit often are Italy and Japan.  I’m hoping to get more familiar with both languages over a long period of time.  I don’t care about making mistakes or embarrassing myself , I just want to be able to understand my fellow humans and have them understand me.  Embrace the embarrassment with the carelessness of a child, the learning accelerates.</p>

        <h4>Basketball Etiquette</h4>
        <ul>
          <li>Take turns, winning team does not stay on the court.  Very different than American pickup basketball.</li>
          <li>If there enough players, they keep score and time (usually 8 minute games)</li>
          <li>After the game, players help mop the court to keep it clean afterwards (I like this ownership model)</li>
          <li>Papers/Scissors/Rock determines how teams are split up.</li>
        </ul>

      </div> */}
      <h2>Japan Trip Photos</h2>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((photo) => ({
                ...photo,
                srcset: photo.srcSet,
                caption: photo.caption,
              }))}
              onClose={closeLightbox}
              onClickPrev={gotoPrevious}
              onClickNext={gotoNext}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
