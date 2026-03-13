import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'recommendation.page.title': {
    id: 'recommendation.page.title',
    defaultMessage: 'Gợi ý | {siteName}',
    description: 'recommendation page title',
  },
  'recommendation.page.heading': {
    id: 'recommendation.page.heading',
    defaultMessage: 'Chúng tôi có một vài gợi ý để bạn bắt đầu.',
    description: 'recommendation page heading',
  },
  'recommendation.skip.button': {
    id: 'recommendation.skip.button',
    defaultMessage: 'Bỏ qua lần này',
    description: 'Skip button text',
  },
  'recommendation.option.trending': {
    id: 'recommendation.option.trending',
    defaultMessage: 'Xu hướng hiện tại',
    description: 'Title for trending products',
  },
  'recommendation.option.popular': {
    id: 'recommendation.option.popular',
    defaultMessage: 'Phổ biến nhất',
    description: 'Title for popular products',
  },
  'recommendation.option.recommended.for.you': {
    id: 'recommendation.option.recommended.for.you',
    defaultMessage: 'Được đề xuất cho bạn',
    description: 'Title for personalized products',
  },
});

export const cardBadgesMessages = defineMessages({
  'recommendation.product-card.pill-text.course': {
    id: 'recommendation.product-card.pill-text.course',
    description: 'Text on a product card that describes which product line this item belongs to',
    defaultMessage: 'Khóa học',
  },
  'recommendation.product-card.pill-text.professional-certificate': {
    id: 'recommendation.product-card.pill-text.professional-certificate',
    description: 'Text on a product card that describes which product line this item belongs to',
    defaultMessage: 'Chứng chỉ nghề nghiệp',
  },
});

export const cardFooterMessages = defineMessages({
  'recommendation.product-card.footer-text.emeritus': {
    id: 'recommendation.product-card.pill-text.emeritus',
    description: 'Text on a product card that describes which product line this item belongs to',
    defaultMessage: 'Được cung cấp trên Emeritus',
  },
  'recommendation.product-card.footer-text.shorelight': {
    id: 'recommendation.product-card.pill-text.shorelight',
    description: 'Text on a product card that describes which product line this item belongs to',
    defaultMessage: 'Được cung cấp thông qua Shorelight',
  },
  'recommendation.product-card.footer-text.number-of-courses': {
    id: 'recommendation.product-card.footer-text.number-of-courses',
    description: 'Label in card footer that shows how many courses are in a program',
    defaultMessage: '{length} {label}',
  },
  'recommendation.product-card.footer-text.subscription': {
    id: 'recommendation.product-card.footer-text.subscription',
    description: 'Label in card footer that describes that it is a subscription program',
    defaultMessage: 'Gói đăng ký',
  },
});

export const externalLinkIconMessages = defineMessages({
  'recommendation.product-card.launch-icon.sr-text': {
    id: 'recommendation.product-card.launch-icon.sr-text',
    description: 'Screen reader text for the launch icon on the cards',
    defaultMessage: 'Mở liên kết trong tab mới',
  },
});

export default messages;
