import type { Dictionary } from "../i18nConfig";
import {
  HAS_LAND_REGISTRY_DATA,
  HAS_LAND_REGISTRY_DATA_CREATOR,
  HAS_TAX_DATA,
  HAS_TAX_DATA_CREATOR,
} from "solid";

// prettier-ignore
const dictionary: Dictionary = {
    "_.actions": "Actions",
    "_.autofill": "Autofill",
    "_.brand": "Brand",
    "_.create": "Create",
    "_.delete": "Delete",
    "_.empty": "Empty",
    "_.errorMessage": "An error has occurred.",
    "_.exists": "<1> exists.",
    "_.form.landRegisterSurveys": "Land Register Surveys",
    "_.form.propertyTaxReturn": "Property Tax Return",
    "_.forms": "Formulars",
    "_.from": "From",
    "_.getAPod": "Get a Pod",
    "_.identity": "Identity",
    "_.inbox": "Inbox",
    "_.load": "Load",
    "_.login": "Login",
    "_.logout": "Logout",
    "_.mainForm": "Main Form",
    "_.missing": "<1> is missing!",
    "_.navigation": "Navigation",
    "_.no": "No",
    "_.notPublic": "<1> is not pubic accessible!",
    "_.pleaseEnter": "Please enter <1>!",
    "_.profileData": "Profile Data",
    "_.public": "<1> is pubic accessible.",
    "_.rawMessage": "Raw Message",
    "_.reload": "Reload",
    "_.revoke": "Revoke access permission",
    "_.save": "Save",
    "_.stammdaten": "Stammdaten",
    "_.storage": "Storage",
    "_.submit": "Submit",
    "_.success": "Success",
    "_.viewer": "Viewer",
    "_.yes": "Yes",
    "_.ok": "OK",
    "_.cancel": "Cancel",
    "_.grant": "Grant",
    "_.deny": "Deny",
    "apps.citizen.app.root.title": "Citizen",
    "apps.landRegistryOffice.app.root.title": "Land Registry Office",
    "apps.taxOffice.app.root.title": "Tax Office",
    "http://xmlns.com/foaf/0.1/firstName": "First name",
    "http://xmlns.com/foaf/0.1/homepage": "Homepage",
    "http://xmlns.com/foaf/0.1/lastName": "Last name",
    "http://xmlns.com/foaf/0.1/title": "Title",
    "sdk.ui.components.FolderStructureVerification.subTitle": "To ensure correct functionality across all applications certain data and access configurations need to be created.",
    "sdk.ui.components.FolderStructureVerification.title": "Some of the necessary data is missing.",
    "sdk.ui.components.SessionContent.1": "This application requires a Pod as data storage and a WebId to identify yourself in the web.",
    "sdk.ui.components.SessionContent.2": "Find out more at",
    "sdk.ui.components.controls.ControlsAutofillWithoutSession.reasonElement.1": "The application needs your WebId to determine the address of your data vault and to retrieve the data from the",
    "sdk.ui.components.controls.ControlsAutofillWithoutSession.reasonElement.2": "file stored there.",
    "sdk.ui.components.controls.ControlsAutofillWithoutSession.reasonElement.3": "The data from this file will be used to fill the content into the form.",
    "sdk.ui.components.editor.EditorTurtleModel.reasonElement.1": "The application needs your WebId to create a data vault for you or to use an existing one. This vault contains your submitted forms, for the inspection of the office.",
    "sdk.ui.components.formItem.FormItemReference.loadError": "Error while fetching referenced data.",
    "sdk.ui.components.formItem.FormItemReference.submitError": "No creator found for reference. Sending access request not possible.",
    "sdk.ui.components.formItem.FormItemReference.load": "Load Data",
    "sdk.ui.components.forms.FormsAuthNSessionWithTitle": "Login with full access for this application",
    "sdk.ui.components.forms.FormsAuthNWebIdWithTitle": "Login with no access for this application",
    "sdk.ui.components.inbox.InboxMessageCardRaw": "Loading raw data failed.",
    "sdk.ui.components.inbox.InboxMessageCardRawTitle": "Raw Turtle Message",
    "sdk.ui.components.inbox.InboxMessageCardText.unknown": "Unknown message type.",
    "sdk.ui.components.inbox.InboxMessageCardText.saveToDataMessage": "The sender provides you with some data to save to your data vault.",
    "sdk.ui.components.inbox.InboxMessageCardText.requestAccessMessage": "A third party requests access to a referenced resource in your data vault.",
    "sdk.ui.components.inbox.InboxMessageCardSaveButton.error": "Some necessary data is missing in message.",
    "sdk.ui.components.inbox.InboxMessageCardSaveButton.success": "Successfully saved message data to stammdaten.",
    "sdk.ui.components.inbox.InboxMessageCardGrantAccessButton.error": "Some necessary data is missing in message.",
    "sdk.ui.components.inbox.InboxMessageCardGrantAccessButton.success.granted": "Successfully granted access permission.",
    "sdk.ui.components.inbox.InboxMessageCardGrantAccessButton.success.denied": "Successfully denied access permission.",
    "sdk.ui.components.modals.ModalDeleteMessageFromInbox": "Do you want to delete this message with all its data from your inbox?",
    "sdk.ui.components.modals.ModalForm.successMessage": "The task has been successfully performed.",
    "sdk.ui.components.modals.ModalForm.title": "Please enter the required data.",
    "sdk.ui.components.modals.ModalSaveToInbox": "You have received data from the previous process. Do you want to store this data in the inbox of your data vault?",
    "sdk.ui.components.modals.ModalSaveToInbox.successMessage": "Successfully saved data to inbox",
    "sdk.ui.components.modals.ModalSaveToInbox.title": "Save to your inbox",
    "sdk.ui.components.modals.ModalAccessRequestToInbox": "It seems like the application does not have the correct permissions to access the referenced data. Do you want to send an access request to the inbox of your data vault?",
    "sdk.ui.components.modals.ModalAccessRequestToInbox.successMessage": "Successfully sent access request to inbox.",
    "sdk.ui.components.modals.ModalAccessRequestToInbox.title": "Missing Access Permission",
    "sdk.ui.components.modals.ModalWebId.description": "A login is required to perform this action. Please click on login to activate the OK button.",
    "sdk.ui.components.modals.ModalWebId.message": "WebId Usage",
    "sdk.ui.components.modals.ModalWebId.title": "Login required",
    [HAS_LAND_REGISTRY_DATA_CREATOR]: "Cadastral data creator",
    [HAS_TAX_DATA_CREATOR]: "Tax data creator",
    [HAS_LAND_REGISTRY_DATA]: "Cadastral data",
    [HAS_TAX_DATA]: "Tax data",
    "referenceUrl parameter is missing": "referenceUrl parameter is missing",
    "Required request url is missing in request body": "Required request url is missing in request body",
    "Could not find request file": "Could not find request file",
    "Access request already granted": "Access request already granted",
    "Access request already denied": "Access request already denied",
    "Could not retrieve agent pod": "Could not retrieve agent pod",
    "Required requestor webId is missing in request body": "Required requestor webId is missing in request body",
    "Required owner webId is missing in request body": "Required owner webId is missing in request body",
    "Required target url is missing in request body": "Required target url is missing in request body",
    "Required access mode is missing in request body": "Required access mode is missing in request body",
    "Could not retrieve owner access modes": "Could not retrieve owner access modes",
    "Owner does not have the permission to grant requested access modes": "Owner does not have the permission to grant requested access modes",
    "Could not create request file": "Could not create request file",
    "Could not retrieve owner pod": "Could not retrieve owner pod",
    "Internal Server Error": "Internal Server Error",
};

export default dictionary;
