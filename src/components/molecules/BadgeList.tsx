import Badge from '@components/atoms/Badge';
import { SKILLS } from '@constants/index';
import { Box } from '@mui/material';
import { badgeListStyle } from '@style/badge-list-style';

function BadgeList() {
  return (
    <Box sx={badgeListStyle}>
      {SKILLS.map((item) => (
        <Badge
          key={item.id}
          icon={item.icon}
          skill={item.skill}
          style="badge-list-style"
        />
      ))}
    </Box>
  );
}

export default BadgeList;
