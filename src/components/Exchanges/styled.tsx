import styled from "styled-components";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

const Table = styled.table`
  border-collapse: collapse;
  min-width: 1000px;
`;

const TableHeaderRow = styled.tr`
  border: 0px;
  border-top: 1px solid ${(p) => p.theme.colors.secondary};
  border-bottom: 2px solid ${(p) => p.theme.colors.secondary};
  color: dimgrey;

  th {
    padding: 0.5rem 0;
  }
`;

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  top: {
    color: '#1a90ff',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
  circle: {
    strokeLinecap: 'round',
  },
}));
const TableBodyRow = styled.tr`
  border: 0px;
  border-top: 1px solid ${(p) => p.theme.colors.secondary};
  border-bottom: 1px solid ${(p) => p.theme.colors.secondary};
  color: ${(p) => p.theme.colors.primary};
`;

const TableData = styled.td<{ color?: string }>`
  color: ${(p) => p.color || "dimgrey"};
  padding: 1.25rem 0;
  vertical-align: middle;

  * {
    vertical-align: middle;
    display: inline-block;
    padding-right: 0.5rem;
  }
`;

const CoinsContainer = styled.div`
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
`;

const CoinsName = styled.b`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const PaginationWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SC = {
  CoinsContainer,
  CoinsName,
  PaginationWrapper,
  Table,
  TableHeaderRow,
  TableBodyRow,
  TableData,
};
