import styled from 'styled-components';
import { urlParser } from '~/client/functions';
import { InfoType } from '~/client/context/@types.context';

const InfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  padding: 0.5em;
  justify-content: center;
  align-items: center;
  background-color: #222;
`;

const Title = styled.p`
  font-size: 1.5em;
  color: white;
`;

const Description = styled.p`
  font-size: 1em;
  color: deepskyblue;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const Link = styled.a`
  margin-bottom: 0.5em;
`;

type InfoProps = {
  info: InfoType;
};

const Info = ({ info }: InfoProps) => (
  <InfoStyled>
    <Title>{`${info.title} v.${info.version}`}</Title>
    <Description dangerouslySetInnerHTML={{ __html: urlParser(info.description) }} />
    <Links>
      <Link href={info.termsOfService} target="_blank" rel="noreferrer">
        Terms of Service
      </Link>
      <Link href={info.contact.email} target="_blank" rel="noreferrer">
        Contact
      </Link>
      <Link
        href={info.license.url}
        target="_blank"
        rel="noreferrer"
      >{`License: ${info.license.name}`}</Link>
    </Links>
  </InfoStyled>
);

export default Info;
