import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'progressive.profiling.page.title': {
    id: 'progressive.profiling.page.title',
    defaultMessage: 'Chào mừng | {siteName}',
    description: 'progressive profiling page title',
  },
  'progressive.profiling.page.heading': {
    id: 'progressive.profiling.page.heading',
    defaultMessage: 'Một vài câu hỏi dành cho bạn sẽ giúp chúng tôi thông minh hơn.',
    description: 'The page heading for the progressive profiling page.',
  },
  'optional.fields.information.link': {
    id: 'optional.fields.information.link',
    defaultMessage: 'Tìm hiểu thêm về cách chúng tôi sử dụng thông tin này.',
    description: 'Optional fields page information link',
  },
  'optional.fields.submit.button': {
    id: 'optional.fields.submit.button',
    defaultMessage: 'Gửi',
    description: 'Submit button text',
  },
  'optional.fields.skip.button': {
    id: 'optional.fields.skip.button',
    defaultMessage: 'Bỏ qua lần này',
    description: 'Skip button text',
  },
  'optional.fields.next.button': {
    id: 'optional.fields.next.button',
    defaultMessage: 'Tiếp theo',
    description: 'Next button text',
  },
  // modal dialog box
  'continue.to.platform': {
    id: 'continue.to.platform',
    defaultMessage: 'Tiếp tục đến {platformName}',
    description: 'Button text for modal when user chooses "skip for now" option',
  },
  'modal.title': {
    id: 'modal.title',
    defaultMessage: 'Cảm ơn bạn đã cho chúng tôi biết.',
    description: 'Heading for welcome page modal',
  },
  'modal.description': {
    id: 'modal.description',
    defaultMessage: 'Bạn có thể hoàn thành hồ sơ của mình trong cài đặt bất kỳ lúc nào nếu bạn thay đổi ý định.',
    description: 'Modal body text',
  },
  // error message
  'welcome.page.error.heading': {
    id: 'welcome.page.error.heading',
    defaultMessage: 'Chúng tôi không thể cập nhật hồ sơ của bạn',
    description: 'Error message heading',
  },
  'welcome.page.error.message': {
    id: 'welcome.page.error.message',
    defaultMessage: 'Đã xảy ra lỗi. Bạn có thể hoàn thành hồ sơ của mình trong cài đặt bất kỳ lúc nào.',
    description: 'Error message body',
  },
});
export default messages;
