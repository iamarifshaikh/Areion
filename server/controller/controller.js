import { Success, Problem } from '../custom/custom.js';
import form from '../schema/form.js';

/**
 * @access public
 * @description Controller Function To Handle Form Submission and Save It Into The Database
 * @param {Object} request - The HTTP request object
 * @param {Object} response - The HTTP response object
 */

export const submitData = async (request, response, next) => {
    try {
        // Extract form data from the request body
        const { name, email, subject, message } = request.body;

        // Create a new instance of the FormModel with the extracted form data
        const formData = new form({
            name,
            email,
            subject,
            message
        });

        // Save the form data to the database
        const savedFormData = await formData.save();

        // Send a success response if the form data is successfully saved
        const successResponse = new Success(200, "Form Submitted successfully!");
        response.status(successResponse.status).json({ message: successResponse.message, data: savedFormData });
    } catch (error) {
        console.error(error);
        // Send a problem response if an error occurs during form submission
        return next(Problem(500, "Form Submission Failed!"));
    }
};

/**
 * @access Private
 * @desc Controller function to fetch all form data
 * @param {Object} request - The HTTP request object
 * @param {Object} response - The HTTP response object
 * @return {Object} - JSON response containing form data or error message
 */
export const fetchData = async (request, response) => {
    try {
        // Fetch all form data from the database
        const allFormData = await form.find();

        // Send a success response with the retrieved form data
        const successResponse = new Success(200, "Form Data Fetched successfully!");
        response.status(successResponse.status).json({ message: successResponse.message, data: allFormData });
    } catch (error) {
        console.error(error);
        // Send a problem response if an error occurs during data retrieval
        response.json(Problem("Failed to retrieve form data", error));
    }
};
    