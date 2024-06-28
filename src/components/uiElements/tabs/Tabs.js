import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const TabContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Tab = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  text-align: center;
  border-bottom: ${props => props.active ? '2px solid #009379' : 'none'};
  font-size: 24px;
  cursor: pointer;  
  color: ${props => props.active ? "#009379" : "#BABABC"};
`;

const ContentContainer = styled.div`
  width: 100%;
  margin-top: 80px;
`;

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container>
      <TabContainer>
        {tabs.map((tab, index) => (
          <Tab key={index} active={activeTab === index} onClick={() => setActiveTab(index)}>
            {tab.label}
          </Tab>
        ))}
      </TabContainer>
      <ContentContainer>
        {tabs[activeTab].content}
      </ContentContainer>
    </Container>
  );
};

export default Tabs;
