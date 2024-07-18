import React from "react";

const UserProfileForm = ({
    currentUser,
    fName,
    lName,
    email,
    phoneNum,
    address,
    setFName,
    setLName,
    setEmail,
    setPhoneNum,
    setAddress,
    handleSave,
    setModal,
    notice,
}) => {
    return (
        <div className="userInfoContainer">
            <h2 className="profileHeading">ACCOUNT INFORMATION</h2>
            {notice && <p className="modalNotice registerSuccess">{notice}</p>}
            <div className="profileBox">
                <form className="profileChangeForm">
                    <div className="userNameContainer">
                        <input
                            className="userFNameBox profileInputArea"
                            type="text"
                            name="fName"
                            id="fName"
                            value={fName}
                            onChange={(e) => setFName(e.target.value)}
                            placeholder={
                                currentUser?.first_name || "First name"
                            }
                        />
                        <input
                            className="userLNameBox profileInputArea"
                            type="text"
                            name="lName"
                            id="lName"
                            value={lName}
                            onChange={(e) => setLName(e.target.value)}
                            placeholder={currentUser?.last_name || "Last name"}
                        />
                    </div>
                    <div className="userContactContainer">
                        <input
                            className="userEmailBox profileInputArea"
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={currentUser?.email || "Email"}
                        />
                        <input
                            className="userPhoneBox profileInputArea"
                            type="text"
                            name="phoneNum"
                            id="phoneNum"
                            value={phoneNum}
                            onChange={(e) => setPhoneNum(e.target.value)}
                            placeholder={
                                currentUser?.phone_number || "Phone number"
                            }
                        />
                    </div>
                    <div className="userAddressContainer">
                        <input
                            className="userAddressBox profileInputArea"
                            type="text"
                            name="address"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder={currentUser?.address || "Address"}
                        />
                    </div>
                    <button
                        className="profileChangeButton"
                        onClick={
                            currentUser
                                ? handleSave
                                : (e) => {
                                      e.preventDefault();
                                      setModal("login");
                                  }
                        }
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserProfileForm;
