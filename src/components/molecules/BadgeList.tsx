import { Box } from '@mui/material';
import { SKILLS } from '../../constants';
import '../../css/skills-badge-style.css';
import { badgeListStyle } from '../../style/badge-list-style';
import Badge from '../atoms/Badge';
function BadgeList() {
  return (
    <Box sx={badgeListStyle}>
      {SKILLS.map((item) => (
        <Badge
          key={item.id}
          icon={item.icon}
          skill={item.skill}
          style="skillBadgeStyle"
        />
      ))}
    </Box>
  );
}

export default BadgeList;
