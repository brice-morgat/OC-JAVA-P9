package com.mediscreen.assessment.proxies;

import com.mediscreen.assessment.beans.NoteBean;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(name = "microservice-history", url = "localhost:8082")
public interface HistoryServiceProxy {
    @GetMapping("/patHistory/getAllByPatId")
    List<NoteBean> getAllNoteByPatId(@RequestParam Long id);
}
