import { localStorageManager } from '@chakra-ui/color-mode';
import { Flex } from '@chakra-ui/layout';
import { Box, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import Certification from '../components/Certification';
import CustomHeading from '../components/CustomHeading';
import Experience from '../components/Experience';
import Impact from '../components/Impact';
import Skill from '../components/Skill';
import { db } from '../firebase';

function Resume() {
  const [data, setData] = useState({});
  useEffect(() => {
    db.collection('web')
      .doc('resume')
      .onSnapshot(snapshot => setData(snapshot.data()));
  }, []);
  return (
    <>
      <Box
        py="12"
        px={{ base: '6', md: '16' }}
        mb={{ base: '3', md: '12' }}
        backgroundColor="#fcfcfc"
        borderTop="2px solid #eee"
        borderBottom="2px solid #eee"
        position="relative"
      >
        <Text color="current" fontSize="44px" fontWeight="600">
          Resume
        </Text>
        <Text
          color="#aaa"
          fontSize="14px"
          fontWeight="300"
          position={{ base: 'relative', md: 'absolute' }}
          top={{ base: '0', md: '5' }}
          right={{ base: '0', md: '10' }}
        >
          {data?.experience?.years} Years of Experience
        </Text>
      </Box>
      <Flex px="6" flexDir="column">
        <CustomHeading title="Impacts" />
        <Box px={{ base: '2', md: '16' }} py="4">
          {data?.impact?.value?.map((d, index) => (
            <Impact title={d} />
          ))}
        </Box>
      </Flex>

      <Flex p="6" flexDirection={{ base: 'column-reverse', md: 'row' }}>
        <Flex mt={{ base: 8, md: 0 }} flexDirection="column" flex="50%">
          <CustomHeading title="Education" />
          <Box mt="4" px={{ base: '2', md: '12' }}>
            {data?.education?.map((d, index) => (
              <Experience
                startYear={d.year}
                // endYear="2021"
                location={d.university}
                title={d.degree}
                company={d.college}
                description={'Percentage: ' + d.percentage + '%'}
              />
            ))}
          </Box>

          <CustomHeading title="Certifications" />
          <Box px={{ base: '2', md: '16' }} py="4">
            {data?.certifications?.map((d, index) => (
              <Certification data={d} />
            ))}
          </Box>
        </Flex>
        <Box flex="50%">
          <CustomHeading title="Experience" />
          <Box mt="4" px={{ base: '2', md: '12' }}>
            {data?.experience?.workExperience
              ?.slice(0)
              .reverse()
              .map((exp, index) => (
                <Experience
                  startYear={exp.start}
                  endYear={exp.end}
                  company={exp.company}
                  title={exp.position}
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ad blanditiis, qui ipsum odit laudantium repudiandae amet explicabo dolorem dolore vero illo dignissimos neque doloremque iure numquam fugiat aliquam ab?"
                />
              ))}
          </Box>
        </Box>
      </Flex>
      <Flex px="6" flexDir="column"></Flex>
      <CustomHeading title="Skills" />
      <Flex
        px="12"
        py="6"
        wrap="wrap"
        justifyContent="space-between"
        align="start"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        {data?.skills?.map((skill, index) => (
          <Skill
            title={skill.title}
            percentage={Number(skill.proficiency) * 10}
          />
        ))}
      </Flex>
    </>
  );
}

export default Resume;
