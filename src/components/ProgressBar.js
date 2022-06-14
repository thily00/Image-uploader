import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 6,
  borderRadius: 8,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#F2F2F2",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#2F80ED",
  },
}));

function ProgressBar() {
  return (
    <>
      <h1 className="uploader__title">Uploading...</h1>
      <Box sx={{ width: "100%" }}>
        <BorderLinearProgress variant="indeterminate" />
      </Box>
    </>
  );
}

export default ProgressBar;
