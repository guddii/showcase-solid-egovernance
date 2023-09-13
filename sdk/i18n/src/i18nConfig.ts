export type I18nKey =
  | "Access request already denied"
  | "Access request already granted"
  | "Could not create request file"
  | "Could not find request file"
  | "Could not retrieve agent pod"
  | "Could not retrieve owner access modes"
  | "Could not retrieve owner pod"
  | "Internal Server Error"
  | "Owner does not have the permission to grant requested access modes"
  | "Required access mode is missing in request body"
  | "Required owner webId is missing in request body"
  | "Required request url is missing in request body"
  | "Required requestor webId is missing in request body"
  | "Required target url is missing in request body"
  | "_.actions"
  | "_.attachment"
  | "_.autofill"
  | "_.brand"
  | "_.cancel"
  | "_.create"
  | "_.delete"
  | "_.deny"
  | "_.empty"
  | "_.errorMessage"
  | "_.exists"
  | "_.form"
  | "_.forms"
  | "_.from"
  | "_.getAPod"
  | "_.grant"
  | "_.identity"
  | "_.inbox"
  | "_.load"
  | "_.login"
  | "_.logout"
  | "_.mainForm"
  | "_.missing"
  | "_.navigation"
  | "_.no"
  | "_.notPublic"
  | "_.ok"
  | "_.pleaseEnter"
  | "_.profileData"
  | "_.public"
  | "_.rawMessage"
  | "_.reload"
  | "_.revoke"
  | "_.save"
  | "_.stammdaten"
  | "_.storage"
  | "_.submit"
  | "_.success"
  | "_.viewer"
  | "_.yes"
  | "apps.citizen.app.root.title"
  | "apps.tradeOffice.app.root.title"
  | "apps.registrationOffice.app.root.title"
  | "apps.taxOffice.app.root.title"
  | "apps.vehicleRegistrationOffice.app.root.title"
  | "apps.customs.app.root.title"
  | "apps.landRegistryOffice.app.root.title"
  | "apps.constructionOffice.app.root.title"
  | "apps.employmentAgency.app.root.title"
  | "apps.environmentalOffice.app.root.title"
  | "apps.carInsuranceCompany.app.root.title"
  | "apps.reconstructionLoanCorporation.app.root.title"
  | "apps.parentalBenefitsOffice.app.root.title"
  | "http://www.w3.org/2006/vcard/ns#family-name"
  | "http://www.w3.org/2006/vcard/ns#given-name"
  | "http://www.w3.org/2006/vcard/ns#locality"
  | "http://xmlns.com/foaf/0.1/firstName"
  | "http://xmlns.com/foaf/0.1/homepage"
  | "http://xmlns.com/foaf/0.1/lastName"
  | "http://xmlns.com/foaf/0.1/title"
  | "referenceUrl parameter is missing"
  | "sdk.solid.services.inbox.createInboxMessageHeader.saveToDataMessageText"
  | "sdk.solid.services.inbox.createInboxMessageHeader.requestAccessMessageText"
  | "sdk.ui.components.FolderStructureVerification.subTitle"
  | "sdk.ui.components.FolderStructureVerification.title"
  | "sdk.ui.components.SessionContent.1"
  | "sdk.ui.components.SessionContent.2"
  | "sdk.ui.components.controls.ControlsAutofillWithoutSession.reasonElement.1"
  | "sdk.ui.components.controls.ControlsAutofillWithoutSession.reasonElement.2"
  | "sdk.ui.components.controls.ControlsAutofillWithoutSession.reasonElement.3"
  | "sdk.ui.components.editor.EditorTurtleModel.reasonElement.1"
  | "sdk.ui.components.formItem.FormItemReference.load"
  | "sdk.ui.components.formItem.FormItemReference.loadError"
  | "sdk.ui.components.formItem.FormItemReference.submitError"
  | "sdk.ui.components.forms.FormsAuthNSessionWithTitle"
  | "sdk.ui.components.forms.FormsAuthNWebIdWithTitle"
  | "sdk.ui.components.inbox.InboxMessageCardGrantAccessButton.error"
  | "sdk.ui.components.inbox.InboxMessageCardGrantAccessButton.success.denied"
  | "sdk.ui.components.inbox.InboxMessageCardGrantAccessButton.success.granted"
  | "sdk.ui.components.inbox.InboxMessageCardRaw"
  | "sdk.ui.components.inbox.InboxMessageCardRawTitle"
  | "sdk.ui.components.inbox.InboxMessageCardSaveButton.error"
  | "sdk.ui.components.inbox.InboxMessageCardSaveButton.success"
  | "sdk.ui.components.inbox.InboxMessageCardText.requestAccessMessage"
  | "sdk.ui.components.inbox.InboxMessageCardText.saveToDataMessage"
  | "sdk.ui.components.inbox.InboxMessageCardText.unknown"
  | "sdk.ui.components.modals.ModalAccessRequestToInbox"
  | "sdk.ui.components.modals.ModalAccessRequestToInbox.successMessage"
  | "sdk.ui.components.modals.ModalAccessRequestToInbox.title"
  | "sdk.ui.components.modals.ModalDeleteMessageFromInbox"
  | "sdk.ui.components.modals.ModalForm.successMessage"
  | "sdk.ui.components.modals.ModalForm.title"
  | "sdk.ui.components.modals.ModalSaveToInbox"
  | "sdk.ui.components.modals.ModalSaveToInbox.successMessage"
  | "sdk.ui.components.modals.ModalSaveToInbox.title"
  | "sdk.ui.components.modals.ModalWebId.description"
  | "sdk.ui.components.modals.ModalWebId.message"
  | "sdk.ui.components.modals.ModalWebId.title";

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "de"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export type Dictionary = Record<I18nKey, string | undefined>;
