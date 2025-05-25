export const VALID_DOMAINS_EMAIL = () => {
	const domains = [
		"gmail.com",
		"yahoo.com",
		"hotmail.com",
		"outlook.com",
		"aol.com",
	];

	if (process.env.NODE_ENV === "development") {
		domains.push("example.com", "mail.com");
	}

	return domains;
};
