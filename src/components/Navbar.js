import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

export default function NavBar() {
	let navigate = useNavigate();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const { pathname } = useLocation();
	const shouldHideNavigation = ["/", "/register"].includes(pathname);

	if (shouldHideNavigation) {
		return null;
	}

	let returnToLoginPage = () => {
		navigate("/");
	};

	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
					<Box
						sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
						<Tooltip title='Account settings'>
							<IconButton
								onClick={handleClick}
								size='small'
								sx={{ ml: 2 }}
								aria-controls={open ? "account-menu" : undefined}
								aria-haspopup='true'
								aria-expanded={open ? "true" : undefined}>
								<Avatar sx={{ width: 40, height: 40 }}>AM</Avatar>
							</IconButton>
						</Tooltip>
					</Box>
					<Menu
						anchorEl={anchorEl}
						id='account-menu'
						open={open}
						onClose={handleClose}
						onClick={handleClose}
						PaperProps={{
							elevation: 0,
							sx: {
								overflow: "visible",
								filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
								mt: 1,
								width: 200,
								"& .MuiAvatar-root": {
									width: 32,
									height: 32,
									ml: -0.5,
									mr: 1,
								},
							},
						}}
						transformOrigin={{ horizontal: "right", vertical: "top" }}
						anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
						<MenuItem>
							<Avatar /> My account
						</MenuItem>
						<MenuItem>
							<ListItemIcon>
								<Settings fontSize='small' />
							</ListItemIcon>
							Settings
						</MenuItem>
						<MenuItem onClick={returnToLoginPage}>
							<ListItemIcon>
								<Logout fontSize='small' />
							</ListItemIcon>
							Logout
						</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
