const validateInput = (data) => {
    const errors = {};

    // Validate first name
    if (!data.firstName || data.firstName.length > 30 || /[^a-zA-Z\s]/.test(data.firstName)) {
        errors.firstName = "First name is required and should not contain special characters or exceed 30 characters.";
    }

    // Validate last name
    if (!data.lastName || data.lastName.length > 30 || /[^a-zA-Z\s]/.test(data.lastName)) {
        errors.lastName = "Last name is required and should not contain special characters or exceed 30 characters.";
    }

    // Validate phone number
    if (!data.phone || !/^\d{10}$/.test(data.phone)) {
        errors.phone = "Phone number is required and must be 10 digits.";
    }

    // Validate alternative number
    if (data.altPhone && !/^\d{10}$/.test(data.altPhone)) {
        errors.altPhone = "Alternative number must be 10 digits.";
    }

    // Validate email
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "A valid email is required.";
    }

    // Validate age
    if (!data.age || data.age < 0 || data.age > 120) {
        errors.age = "Age must be a valid number between 0 and 120.";
    }

    // Validate address
    if (!data.address || data.address.length > 100) {
        errors.address = "Address is required and should not exceed 100 characters.";
    }

    // Validate city
    if (!data.city || data.city.length > 50) {
        errors.city = "City is required and should not exceed 50 characters.";
    }

    // Validate district
    if (!data.district || data.district.length > 50) {
        errors.district = "District is required and should not exceed 50 characters.";
    }

    // Validate state
    if (!data.state || data.state.length > 50) {
        errors.state = "State is required and should not exceed 50 characters.";
    }

    // Validate pincode
    if (!data.pincode || !/^\d{6}$/.test(data.pincode)) {
        errors.pincode = "Pincode is required and must be 6 digits.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

module.exports = validateInput;