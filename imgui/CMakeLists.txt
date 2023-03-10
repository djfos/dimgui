cmake_minimum_required(VERSION 3.15 FATAL_ERROR)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

project(imgui LANGUAGES CXX)

# Otherwise Windows (which doesn't support RPATH) cannot find the DLLs at runtime
set(PHASING_OUTPUT_DIR ${PROJECT_BINARY_DIR}/bin)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${PHASING_OUTPUT_DIR})
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PHASING_OUTPUT_DIR})
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${PHASING_OUTPUT_DIR})
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY_DEBUG ${PHASING_OUTPUT_DIR})
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY_DEBUG ${PHASING_OUTPUT_DIR})
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY_DEBUG ${PHASING_OUTPUT_DIR})
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY_RELEASE ${PHASING_OUTPUT_DIR})
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY_RELEASE ${PHASING_OUTPUT_DIR})
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY_RELEASE ${PHASING_OUTPUT_DIR})
set(CMAKE_DEBUG_POSTFIX "") # No more annoying phasing_d.dll

# vulkan
# find_package(Vulkan REQUIRED)

# glfw
set(GLFW_LIBRARY_TYPE OBJECT)
set(GLFW_BUILD_EXAMPLES OFF)
set(GLFW_BUILD_TESTS OFF)
set(GLFW_BUILD_DOCS OFF)
add_subdirectory(build-glfw/glfw)
target_compile_definitions(glfw PUBLIC _GLFW_BUILD_DLL)

# imgui
set(IMGUI_SOURCE_DIR cimgui/imgui)
set(IMGUI_SOURCE_FILE
    ${IMGUI_SOURCE_DIR}/imgui.cpp
    ${IMGUI_SOURCE_DIR}/imgui_demo.cpp
    ${IMGUI_SOURCE_DIR}/imgui_draw.cpp
    ${IMGUI_SOURCE_DIR}/imgui_tables.cpp
    ${IMGUI_SOURCE_DIR}/imgui_widgets.cpp
    ${IMGUI_SOURCE_DIR}/backends/imgui_impl_glfw.cpp
    # ${IMGUI_SOURCE_DIR}/backends/imgui_impl_vulkan.cpp
    ${IMGUI_SOURCE_DIR}/backends/imgui_impl_opengl3.cpp
    cimgui/cimgui.cpp
    dim_config.cpp
    src/dimgui_style.cpp
    src/dimgui_input_text_callback_data.cpp
)

add_library(imgui SHARED ${IMGUI_SOURCE_FILE})
target_include_directories(imgui PUBLIC ${IMGUI_SOURCE_DIR})
# target_include_directories(imgui PUBLIC glfw/include)
target_link_libraries(imgui PUBLIC glfw)
# target_link_libraries(imgui PUBLIC Vulkan::Vulkan)
# target_compile_definitions(imgui PUBLIC GLFW_DLL)


if(WIN32)
    set(IMGUI_IMPL_API "extern \"C\" __declspec(dllexport)")
    target_compile_definitions(imgui PUBLIC IMGUI_IMPL_API=${IMGUI_IMPL_API})
endif()

target_include_directories(imgui PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})
target_compile_definitions(imgui PUBLIC IMGUI_USER_CONFIG=\"dim_config.h\")

# add_executable(test_glfw_opengl3 test/glfw_opengl3.cpp)
# target_include_directories(test_glfw_opengl3 PUBLIC cimgui)
# target_include_directories(test_glfw_opengl3 PUBLIC ${IMGUI_SOURCE_DIR})
# target_link_libraries(test_glfw_opengl3 PUBLIC glfw)