import React from 'react';
import styled from "styled-components";

const Card = styled.div`
  background-color: #FFFFFF;
  border-radius: 32px;
  padding: 20px;
  max-width: 1240px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.7rem;
  line-height: 45px;
  color: #181919;
  margin-bottom: 10px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 24px;
  color: rgba(54, 56, 55, 0.6);
  margin-bottom: 48px;
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
  /* background-color: #e0e0e0; */
  text-align: center;
`;

const Td = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

const LastRowTd = styled(Td)`
  border-bottom: none;
`;

const TableRow = ({ range, fee }) => (
    <tr>
      <Td>{range}</Td>
      <Td>{fee}</Td>
    </tr>
  );

const CardRates = ({ title3, subtitle3, rangeTitle, ranges, rateTitle, rates }) => {
  return (
   <Card>
      <Title>{title3}</Title>
      <Description>{subtitle3}</Description>
      <Table>
        <thead>
          <tr>
            <Th>{rangeTitle}</Th>
            <Th>{rateTitle}</Th>
          </tr>
        </thead>
        <tbody>
          {ranges.map((range, index) => (
            <TableRow key={index} range={range} fee={rates[index]} />
          ))}
        </tbody>
      </Table>
    </Card>
  );
}

export default CardRates;
