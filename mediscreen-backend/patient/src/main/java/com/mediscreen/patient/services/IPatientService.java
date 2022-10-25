package com.mediscreen.patient.services;

import com.mediscreen.patient.models.Patient;

import java.util.List;

public interface IPatientService {

    /**
     * This function returns a Patient object with the given id.
     *
     * @param id The id of the patient to retrieve.
     * @return A patient object
     */
    public Patient getPatient(Long id);

    /**
     * Save a patient to the database.
     *
     * @param patient The patient object to be saved.
     * @return Patient
     */
    public Patient savePatient(Patient patient);

    /**
     * Delete a patient by id.
     *
     * @param id The id of the patient to delete.
     * @return Patient
     */
    public void deletePatient(Long id);

    /**
     * This function returns a list of all patients in the database.
     *
     * @return A list of all patients in the database.
     */
    public List<Patient> getAllPatients();

    /**
     * Update a patient in the database.
     *
     * @param patient The patient object that you want to update.
     * @return The updated patient.
     */
    public Patient updatePatient(Patient patient);
}
