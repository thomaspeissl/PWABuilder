import { css } from 'lit';

export default css`
:host {
		--sl-focus-ring-width: 3px;
		--sl-input-focus-ring-color: #595959;
		--sl-focus-ring: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
		--sl-input-border-color-focus: #4F3FB6ac;
		--sl-color-primary-300: var(--primary-color);
	}
	sl-tooltip::part(base){
		--sl-tooltip-font-size: 14px;
	}

	#wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		width: 100vw;
		gap: 30px;
	}

	#wrapper > * {
		box-sizing: border-box;
	}

	#wrapper > *:not(#hero-section){
		max-width: 1366px;
	}

	#wrapper > :last-child:not(#footer-section) {
		margin-bottom: 30px;
	}

	#hero-section {
		padding: 50px 100px;
		background-image: url("/assets/new/giveaway_banner.png");
		height: 300px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;

		display: flex;
		flex-direction: column;
		gap: 6px;

		align-items: flex-start;
		justify-content: center;
		width: 100%;
	}

	#hero-section h1 {
		font-family: Hind;
		font-size: var(--header-font-size);
		font-weight: 700;
		line-height: 40px;
		letter-spacing: 0em;
		text-align: left;
		color: #000000;
		margin: 0;
		width: 65%;
	}

	#hero-section p {
		font-family: Hind;
		font-size: var(--subheader-font-size);
		font-weight: 400;
		line-height: 26px;
		letter-spacing: 0em;
		text-align: left;
		margin: 0;
		color: #000000;
		width: 50%;
	}

	.input-area {
		display: flex; 
		gap: 10px;
		margin-top: 20px;
	}

	#hero-section sl-input::part(base) {
		border: 1px solid #e5e5e5;
		border-radius: var(--input-border-radius);
		color: var(--font-color);
		width: 28em;
		font-size: 14px;
		height: 3em;
	}

	#hero-section sl-input::part(input) {
		height: 3em;
	}

	/* #hero-section .error::part(base){
		border-color: #eb5757;
		--sl-input-focus-ring-color: #eb575770;
		--sl-focus-ring-width: 3px;
		--sl-focus-ring: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
		--sl-input-border-color-focus: #eb5757ac;
	}

	.error-message {
		color: var(--error-color);
		font-size: var(--small-font-size);
		margin-top: 6px;
	} */

	#app-info-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 75%;
		background-color: #ffffff;
		border-radius: 10px;
		min-height: 165px;
		box-shadow: 0px 4px 30px 0px #00000014;
		gap: 15px;
		padding: 25px;
		margin-top: -95px;
	}

	#logo-and-text {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
		gap: 15px;
	}

	.square::part(indicator) {
		width: 100px;
		height: 100px;
		border-radius: 10px;
	}

	img.square {
		width: 100px;
		height: 100px;
		border-radius: 10px;
		padding: 10px;
	}

	#img-holder {
		height: 120px;
		border-radius: 10px;
		box-shadow: 0px 4px 30px 0px #00000014;
	}

	#words {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	#words > *::part(indicator) {
		height: 16px;
	}

	#words sl-skeleton:nth-child(1)::part(indicator) {
		height: 24px;
	}
	#words sl-skeleton:nth-child(1)::part(base) {
		width: 55%;
	}

	#words sl-skeleton:nth-child(2)::part(base) {
		width: 60%;
	}

	#words sl-skeleton:nth-child(3)::part(base) {
		width: 70%;
	}

	#words sl-skeleton:nth-child(4)::part(base) {
		width: 60%;
	}

	#categories > *::part(indicator) {
		height: 46px;
	}

 .card-holder {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		min-width: 92px;
 }

 .card-holder p {
		margin: 0;
		font-size: 14px;
		white-space: nowrap;
 }


 .card-holder sl-progress-ring {
	--size: 72px;
	font-size: 12px;
 }

 #rings {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	place-items: center;
	gap: 20px;
	box-shadow: 0px 4px 30px 0px #00000014;
	border-radius: 10px;
	padding: 20px;
 }

.loader-round {
	width: 72px;
	height: 72px;
	border-radius: 50%;
	position: relative;
	flex-shrink: 0;
	animation: rotate 1s linear infinite
}

.loader-round::before {
	content: "";
	box-sizing: border-box;
	position: absolute;
	inset: 0px;
	border-radius: 50%;
	border: 6px solid #D6D6D6;
	/* animation: prixClipFix 2s linear infinite, 2s ease-in-out 0.5s infinite normal none running pulse; */
	clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 50%)
}

@keyframes rotate {
	100%   {transform: rotate(360deg)}
}

#words p {
	margin: 0;
	font-size: 14px;
}

#words p:nth-child(1) {
	font-size: 24px;
	font-weight: 700;
}
#words p:nth-child(2) {
	width: 55%;
	font-weight: 700;
}

#app-info {
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
	gap: 15px;
}

.feedback-holder {
	display: flex;
	gap: .5em;
	padding: .5em;
	border-radius: 3px;
	width: 100%;
	word-break: break-word;
	box-sizing: border-box;
}

.type-error {
	align-items: flex-start;
	background-color: #FAEDF1;
	border-left: 4px solid var(--error-color);
}

.feedback-holder p {
	margin: 0;
	font-size: 14px;
}

.error-title {
	font-weight: bold;
}

.error-desc {
	max-height: 175px;
	overflow-y: auto;
	line-height: normal;
}

#qual-div {
	background-color: #ffffff;
	border-radius: 10px;
	padding: 20px;
}

#qual-sum {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 20px;
}

#qual-sum h2, #qual-section h2 {
	font-size: 18px;
	color: #4F3FB6;
	margin: 0;
}


#action-items-section {
	width: 75%;
}

.details::part(base) {
	border-radius: 10px;
	border: none;
}
.details::part(summary) {
	font-weight: bold;
	font-size: var(--card-body-font-size);
}
.details::part(header) {
	padding: 1em .75em;
}

sl-details::part(summary-icon){
	display: none;
}

sl-progress-ring {
	height: fit-content;
	--track-width: 4px;
	--indicator-width: 8px;
	--size: 100px;
	font-size: var(--subheader-font-size);
}

sl-progress-ring::part(label){
	color: var(--primary-color);
	font-weight: bold;
}

.red {
	--indicator-color: var(--error-color);
}

.yellow {
	--indicator-color: var(--warning-color);
}

.green {
	--indicator-color: var(--success-color);
}

.macro {
	width: 3em;
	height: auto;
}

#categories {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 10px;
}

.inner-details::part(base) {
	border: none;
	background-color: #F1F1F1;
}

.inner-details::part(header) {
	padding: 0;
}

sl-details::part(header):focus {
	outline: none;
}

#qual-details::part(content) {
	padding-top: 0;
}

.inner-details::part(content) {
	padding: 20px;
	padding-top: 0;
}

.inner-summary {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 5px 10px;
}

.inner-summary h3 {
	font-size: 14px;
	font-weight: normal;
	color: var(--font-color);
	margin: 0;
}

.summary-left {
	display: flex;
	align-items: center;
	gap: 10px;
}

.todos {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(3, 1fr);
}

.inner-todo {
	display: flex;
	gap: 10px;
	align-items: center;
}

.inner-todo p {
	margin: 0;
	font-size: 14px;
	white-space: nowrap;
}

.inner-todo img {
	width: 13px;
	height: auto;
}

#enhancements-details::part(base) {
	background-color: #F1F2FA;
}

.dropdown_icon {
	transform: rotate(0deg);
	transition: transform .5s;
}

#sign-in-section {
	width: 75%;
	display: flex;
	align-items: flex-start;
}

.primary::part(base) {
	background-color: var(--font-color);
	color: white;
	font-size: 14px;
	height: 3em;
	border-radius: 50px;
}

.primary::part(label){
	display: flex;
	align-items: center;
	padding: var(--button-padding);
}

.primary::part(base):hover {
	border-color: var(--primary-color);
}

#qual-section {
	width: 75%;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border-radius: 10px;
	background-color: #ffffff;
}

#qual-section li {
	font-size: 14px;
}

#qual-section ul {
	margin: 20px 0;
}

#footer-section {
	background-color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 40px;
	position: relative;
	width: 100%;
}

#footer-section-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	width: 80%;
	column-gap: 20px;
	row-gap: 50px;
}

#marketing-img {
	border-radius: 10px;
	width: 430px;
	height: auto;
}

.footer-text {
	display: flex;
	flex-direction: column;
	gap: 10px;
	place-self: center;
}

.footer-text > * {
	margin: 0;
}

.footer-text sl-button::part(base){
	width: 35%;
}

.subheader {
	font-size: 24px;
	font-weight: 700;
	color: var(--font-color);
}

.body-text {
	font-size: 16px;
	color: var(--font-color);
}

.large-subheader {
	font-size: 36px;
	font-weight: 700;
	color: var(--font-color);
	line-height: 40px;
}

.large-body-text {
	font-size: 20px;
	color: var(--font-color);
	width: 76%;
}

.wheel-img {
	position: absolute;
	bottom: 0;
	right: 0;
	width: 500px;
}

#terms-and-conditions {
	display: flex;
	flex-direction: column;
	width: 75%;
}

#terms-and-conditions label {
	font-family: Hind;
	font-size: 14px;
	font-weight: 400;
	line-height: 12px;
	color:#292C3A;
	margin-bottom: 15px;
}

#terms-and-conditions sl-button {
	width: 218px;
	height: auto;
	background: #292C3A;
	box-shadow: 0px 0.9625px 3.85px rgba(0, 0, 0, 0.25);
	border-radius: 42.35px;
	margin-bottom: 10px;
}

#terms-and-conditions p {
	font-weight: bold;
	font-size: 14px;
	line-height: 16px;
	color: #292C3A;
}

#terms-and-conditions a { 
	color: #4F3FB6;
	text-decoration: underline;
}

#hero-section-bottom {
	width: 100%;
	height: 309px;
	background-image: url("/assets/microsoft-promo-banner.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}

@media(max-width: 1024px){

	#app-info {
		flex-direction: column;
	}
	#rings {
		display: flex;
		justify-content: space-evenly;
	}
	.card-holder {
		min-width: 50px;
	}

}
`