const product = document.getElementById("product");
const productDropdown = document.getElementById("product-dropdown");
const productArrowDown = document.getElementById("product-arrow-down");
const productArrowUp = document.getElementById("product-arrow-up");

const company = document.getElementById("company");
const companyDropdown = document.getElementById("company-dropdown");
const companyArrowDown = document.getElementById("company-arrow-down");
const companyArrowUp = document.getElementById("company-arrow-up");

const connect = document.getElementById("connect");
const connectDropdown = document.getElementById("connect-dropdown");
const connectArrowDown = document.getElementById("connect-arrow-down");
const connectArrowUp = document.getElementById("connect-arrow-up");

product.addEventListener("click", productFunctionOpen);

function productFunctionOpen() {
	if ((productDropdown.style.display = "none")) {
		productDropdown.classList.toggle("product-dropdown-open");
		if (productArrowUp.hasAttribute("hidden")) {
			productArrowUp.removeAttribute("hidden");
			productArrowDown.setAttribute("hidden", "1");
		} else {
			productArrowUp.setAttribute("hidden", "true");
			productArrowDown.removeAttribute("hidden");
		}
	}
}

company.addEventListener("click", companyFunctionOpen);

function companyFunctionOpen() {
	if ((companyDropdown.style.display = "none")) {
		companyDropdown.classList.toggle("company-dropdown-open");
		if (companyArrowUp.hasAttribute("hidden")) {
			companyArrowUp.removeAttribute("hidden");
			companyArrowDown.setAttribute("hidden", "1");
		} else {
			companyArrowUp.setAttribute("hidden", "true");
			companyArrowDown.removeAttribute("hidden");
		}
	}
}

connect.addEventListener("click", connectFunctionOpen);

function connectFunctionOpen() {
	if ((connectDropdown.style.display = "none")) {
		connectDropdown.classList.toggle("connect-dropdown-open");
		if (connectArrowUp.hasAttribute("hidden")) {
			connectArrowUp.removeAttribute("hidden");
			connectArrowDown.setAttribute("hidden", "1");
		} else {
			connectArrowUp.setAttribute("hidden", "true");
			connectArrowDown.removeAttribute("hidden");
		}
	}
}

// MOBILE NAV
const mobileProduct = document.getElementById("mobile-product");
const mobileProductDropdown = document.getElementById("mobile-product-dropdown");
const mobileProductArrowDown = document.getElementById("mobile-product-arrow-down");
const mobileProductArrowUp = document.getElementById("mobile-product-arrow-up");

mobileProduct.addEventListener("click", mobileProductFunction);

function mobileProductFunction() {
	if ((mobileProductDropdown.style.display = "none")) {
		mobileProductDropdown.classList.toggle("mobile-product-dropdown-open");
		if (mobileProductArrowUp.hasAttribute("hidden")) {
			mobileProductArrowUp.removeAttribute("hidden");
			mobileProductArrowDown.setAttribute("hidden", "1");
		} else {
			mobileProductArrowUp.setAttribute("hidden", "true");
			mobileProductArrowDown.removeAttribute("hidden");
		}
	}
}

const mobileCompany = document.getElementById("mobile-company");
const mobileCompanyDropdown = document.getElementById("mobile-company-dropdown");
const mobileCompanyArrowDown = document.getElementById("mobile-company-arrow-down");
const mobileCompanyArrowUp = document.getElementById("mobile-company-arrow-up");

mobileCompany.addEventListener("click", mobileCompanyFunction);

function mobileCompanyFunction() {
	if ((mobileCompanyDropdown.style.display = "none")) {
		mobileCompanyDropdown.classList.toggle("mobile-company-dropdown-open");
		if (mobileCompanyArrowUp.hasAttribute("hidden")) {
			mobileCompanyArrowUp.removeAttribute("hidden");
			mobileCompanyArrowDown.setAttribute("hidden", "1");
		} else {
			mobileCompanyArrowUp.setAttribute("hidden", "true");
			mobileCompanyArrowDown.removeAttribute("hidden");
		}
	}
}

const mobileConnect = document.getElementById("mobile-connect");
const mobileConnectDropdown = document.getElementById("mobile-connect-dropdown");
const mobileConnectArrowDown = document.getElementById("mobile-connect-arrow-down");
const mobileConnectArrowUp = document.getElementById("mobile-connect-arrow-up");

mobileConnect.addEventListener("click", mobileConnectFunction);

function mobileConnectFunction() {
	if ((mobileConnectDropdown.style.display = "none")) {
		mobileConnectDropdown.classList.toggle("mobile-connect-dropdown-open");
		if (mobileConnectArrowUp.hasAttribute("hidden")) {
			mobileConnectArrowUp.removeAttribute("hidden");
			mobileConnectArrowDown.setAttribute("hidden", "1");
		} else {
			mobileConnectArrowUp.setAttribute("hidden", "true");
			mobileConnectArrowDown.removeAttribute("hidden");
		}
	}
}

const mobileNavbarContainer = document.getElementById("mobile-navbar-container");
const hamburgerMenu = document.getElementById("hamburger-menu");
const closeMenu = document.getElementById("close-menu");

hamburgerMenu.addEventListener("click", openMenu);

function openMenu() {
	if ((mobileNavbarContainer.style.display = "none")) {
		mobileNavbarContainer.style.display = "flex";
	}
	if (!hamburgerMenu.hasAttribute("hidden")) {
		hamburgerMenu.setAttribute("hidden", "1");
		closeMenu.removeAttribute("hidden");
	}
}

closeMenu.addEventListener("click", closeNavbarMenu);

function closeNavbarMenu() {
	if (!(mobileNavbarContainer.style.display = "none")) {
		mobileNavbarContainer.style.display = "none";
	}
	if (!closeMenu.hasAttribute("hidden")) {
		closeMenu.setAttribute("hidden", "0");
		hamburgerMenu.removeAttribute("hidden");
	}
}
