import { Box, Flex } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import CustomHeading from '../components/CustomHeading';
import WhatIDo from '../components/WhatIDo';
import Header from '../components/Header';
import { BsPencil, BsCode, BsAward } from 'react-icons/bs';
import { BiCoffeeTogo } from 'react-icons/bi';
import { FiCodepen } from 'react-icons/fi';
import { SiXcode } from 'react-icons/si';
import { AiOutlineApple } from 'react-icons/ai';
import { IoIosPhonePortrait, IoIosWatch } from 'react-icons/io';
import { IoHourglassOutline } from 'react-icons/io5';
import Testimonial from '../components/Testimonial';
import FunFact from '../components/FunFact';
import { db } from '../firebase';
import Client from '../components/Client';
import Carousel from '../components/Carousel';
function Home() {
  const [home, setHome] = useState({});
  const [funFacts, setFunFacts] = useState([]);
  const [testimonials, setTestmonials] = useState([]);
  const [whatIDo, setwWhatIDo] = useState([]);
  const [workedFor, setWorkedFor] = useState([]);

  const icons = [
    AiOutlineApple,
    SiXcode,
    IoIosWatch,
    BsCode,
    BsPencil,
    FiCodepen,
    IoIosPhonePortrait,
  ];

  const icons2 = [AiOutlineApple, BiCoffeeTogo, IoHourglassOutline, BsAward];
  useEffect(() => {
    db.collection('web')
      .doc('home')
      .onSnapshot(snapshot => setHome(snapshot.data()));
    db.collection('web')
      .doc('home')
      .collection('testimonials')
      .onSnapshot(snapshot =>
        setTestmonials(snapshot.docs.map(doc => doc.data()))
      );
    db.collection('web')
      .doc('home')
      .collection('whatIdo')
      .onSnapshot(snapshot =>
        setwWhatIDo(snapshot.docs.map(doc => doc.data()))
      );
    db.collection('web')
      .doc('home')
      .collection('funFacts')
      .onSnapshot(snapshot =>
        setFunFacts(snapshot.docs.map(doc => doc.data()))
      );
    db.collection('web')
      .doc('home')
      .collection('workedFor')
      .onSnapshot(snapshot =>
        setWorkedFor(snapshot.docs.map(doc => doc.data()))
      );
  }, []);

  return (
    <Box>
      <Header data={home} />
      <CustomHeading title="What I do" />
      <Box mx={{ base: '2', md: '24' }} my={{ base: '0', md: '4' }}>
        <Flex flexDirection={{ base: 'column', md: 'row' }} flexWrap="wrap">
          {whatIDo.map((data, index) => (
            <WhatIDo
              index={index}
              icon={icons[index]}
              heading={data.title}
              // content={data.description}
            />
          ))}
        </Flex>
      </Box>

      <CustomHeading title="Testmonials" />
      <Box
        mt="4"
        mx={{ base: '2', md: '16' }}
        // flexDirection={{ base: 'column', md: 'row' }}
      >
        <Carousel
          slidesToShow={2}
          childern={testimonials.map((data, index) => (
            <Testimonial index={index} data={data} />
          ))}
        />
      </Box>

      <CustomHeading title="Worked for" />
      <Box
        mt="4"
        mx={{ base: '2', md: 'auto' }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Carousel
          slidesToShow={3}
          childern={workedFor.map((data, index) => (
            <Client index={index} data={data} />
          ))}
        />
      </Box>
      <CustomHeading title="Fun Facts" />
      <Flex
        mx="16"
        justify="center"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        {funFacts.map((data, index) => (
          <FunFact icons={icons2} index={index} data={data} />
        ))}
      </Flex>
    </Box>
  );
}

export default Home;
