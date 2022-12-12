package com.mediscreen.assessment.proxies;

import com.mediscreen.assessment.beans.PatientBean;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "microservice-patients", url = "localhost:8081")
public interface PatientServiceProxy {
    @GetMapping(value = "/patient/get")
    PatientBean getPatientById(@RequestParam Long id);
}
