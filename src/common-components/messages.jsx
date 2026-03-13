import { defineMessages } from "@edx/frontend-platform/i18n";

const messages = defineMessages({
  // institution login strings
  "institution.login.page.sub.heading": {
    id: "institution.login.page.sub.heading",
    defaultMessage: "Chọn cơ sở giáo dục của bạn từ danh sách bên dưới",
    description: "Heading of the institutions list",
  },
  // logistration strings
  "logistration.sign.in": {
    id: "logistration.sign.in",
    defaultMessage: "Đăng nhập",
    description: "Text that appears on the tab to switch between login and register",
  },
  "logistration.register": {
    id: "logistration.register",
    defaultMessage: "Đăng ký",
    description: "Text that appears on the tab to switch between login and register",
  },
  // enterprise sso strings
  "enterprisetpa.title.heading": {
    id: "enterprisetpa.title.heading",
    defaultMessage: "Bạn có muốn đăng nhập bằng thông tin đăng nhập {providerName} của mình không?",
    description: "Header text used in enterprise third party authentication",
  },
  "enterprisetpa.login.button.text": {
    id: "enterprisetpa.login.button.text",
    defaultMessage: "Hiển thị cho tôi các cách đăng nhập hoặc đăng ký khác",
    description: "Button text for login",
  },
  "enterprisetpa.login.button.text.public.account.creation.disabled": {
    id: "enterprisetpa.login.button.text.public.account.creation.disabled",
    defaultMessage: "Hiển thị cho tôi các cách đăng nhập khác",
    description: "Button text for login when account creation is disabled",
  },
  // social auth providers
  "sso.sign.in.with": {
    id: "sso.sign.in.with",
    defaultMessage: "Đăng nhập bằng {providerName}",
    description: "Screen reader text that appears before social auth provider name",
  },
  "sso.create.account.using": {
    id: "sso.create.account.using",
    defaultMessage: "Tạo tài khoản bằng {providerName}",
    description: "Screen reader text that appears before social auth provider name",
  },
  // password field strings
  "show.password": {
    id: "show.password",
    defaultMessage: "Hiển thị mật khẩu",
    description: "aria label for show password icon on password field",
  },
  "hide.password": {
    id: "hide.password",
    defaultMessage: "Ẩn mật khẩu",
    description: "aria label for hide password icon on password field",
  },
  "one.letter": {
    id: "one.letter",
    defaultMessage: "1 chữ cái",
    description: "password requirement to have 1 letter",
  },
  "one.number": {
    id: "one.number",
    defaultMessage: "1 số",
    description: "password requirement to have 1 number",
  },
  "eight.characters": {
    id: "eight.characters",
    defaultMessage: "8 ký tự",
    description: "password requirement to have a minimum of 8 characters",
  },
  "password.sr.only.helping.text": {
    id: "password.sr.only.helping.text",
    defaultMessage: "Mật khẩu phải chứa ít nhất 8 ký tự, ít nhất một chữ cái và ít nhất một số",
    description: "Password helping text for the sr-only class",
  },
  // third party auth
  "tpa.alert.heading": {
    id: "tpa.alert.heading",
    defaultMessage: "Gần hoàn thành rồi!",
    description: "Success alert heading after user has successfully signed in with social auth",
  },
  "login.third.party.auth.account.not.linked": {
    id: "login.third.party.auth.account.not.linked",
    defaultMessage:
      "Bạn đã đăng nhập thành công vào {currentProvider}, nhưng tài khoản {currentProvider} " +
      "của bạn không có tài khoản {platformName} được liên kết. Để liên kết tài khoản của bạn, " +
      "hãy đăng nhập ngay bằng mật khẩu {platformName} của bạn.",
    description:
      "Message that appears on login page if user has successfully authenticated with social " +
      "auth but no associated platform account exists",
  },
  "register.third.party.auth.account.not.linked": {
    id: "register.third.party.auth.account.not.linked",
    defaultMessage:
      "Bạn đã đăng nhập thành công vào {currentProvider}! Chúng tôi chỉ cần thêm một chút thông tin " +
      "trước khi bạn bắt đầu học tập với {platformName}.",
    description:
      "Message that appears on register page if user has successfully authenticated with TPA " +
      "but no associated platform account exists",
  },
  "registration.using.tpa.form.heading": {
    id: "registration.using.tpa.form.heading",
    defaultMessage: "Hoàn thiện việc tạo tài khoản của bạn",
    description: "Heading that appears above form when user is trying to create account using social auth",
  },
  supportTitle: {
    id: "zendesk.supportTitle",
    description: "Title for the support button",
    defaultMessage: "Hỗ trợ edX",
  },
  selectTicketForm: {
    id: "zendesk.selectTicketForm",
    description: "Select ticket form",
    defaultMessage: "Vui lòng chọn loại yêu cầu của bạn:",
  },
  "registration.other.options.heading": {
    id: "registration.other.options.heading",
    defaultMessage: "Hoặc đăng ký bằng:",
    description: "A message that appears above third party auth providers i.e saml, google, facebook etc",
  },
  "institution.login.button": {
    id: "institution.login.button",
    defaultMessage: "Thông tin đăng nhập cơ sở/trường học",
    description: "shows institutions list",
  },
  "login.other.options.heading": {
    id: "login.other.options.heading",
    defaultMessage: "Hoặc đăng nhập bằng:",
    description: "Text that appears above other sign in options like social auth buttons",
  },
  "enterprise.login.btn.text": {
    id: "enterprise.login.btn.text",
    defaultMessage: "Thông tin đăng nhập công ty hoặc trường học",
    description: "Company or school login link text.",
  },
});

export default messages;
