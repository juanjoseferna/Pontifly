import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const FormContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: transparent;
`;

export const MutedLink = styled.a`
  font-size: 15px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  margin: 10px;
`;

export const BoldLink = styled.a`
  font-size: 17px;
  color: #111129;
  font-weight: 500;
  text-decoration: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  outline: none;
  border: 2px solid rgba(100, 100, 100, 0.1);
  padding: 10px;
  border-radius: 100px 100px 100px 100px;
  border-bottom: 1.4px solid transparent;
  
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  
  &:focus {
    outline: none;
    border-bottom: 2px solid #111129;
  }
`;

export const SubmitBottom = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: white;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #111129;
  
  &:hover {
    filter: brightness(1.03);
  }
`;